import React, { Component } from "react";
import "../App.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

class SingleImageUploadComponent extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: null,
  };

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  submit = () => {
    var fd = new FormData();

    fd.append("file", this.state.selectedFile);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        alert("Uploaded!");
      }
    };
    request.open(
      "POST",
      "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload",
      true
    );
    request.send(fd);
  };

  render() {
    let $imagePreview = (
      <div className="centered">
        <span
          style={{
            fontSize: "3em",
            color: "#fcc014ff",
          }}
        >
          <BsFillPlusCircleFill />
        </span>
        <p
          style={{
            fontSize: "0.8em",
          }}
        >
          Please select an image
        </p>
      </div>
    );
    if (this.state.imagePreviewUrl) {
      $imagePreview = (
        <div className="centered">
          <button
            className="custom-icon-close"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ imagePreviewUrl: null });
            }}
          >
            <MdCancel />
          </button>
          <img src={this.state.imagePreviewUrl} alt="icon" />    
          {console.log(this.state.selectedFile.name)} 
        </div>
      );
    }

    return (
      <div className="p-4">
        <label className="custom-file-upload-img">
          <input type="file" accept="image/*" name="avatar" onChange={this.fileChangedHandler} />
          <div>{$imagePreview}</div>
        </label>
      </div>
    );
  }
}

export default SingleImageUploadComponent;
