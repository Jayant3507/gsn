import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-imgupload',
  templateUrl: './imgupload.component.html',
  styleUrls: ['./imgupload.component.css']
})
export class ImguploadComponent implements OnInit {
 // uploadedFiles: any[] = [];

  imageSrc: String;
  fileList: any[] = [];
  listOfFiles: any[] = [];
  images = [];
  index;
  myForm = new FormGroup({
    imageUpload: new FormControl('', [Validators.required])
  })

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {}

  onFileChange(event) {
    //console.log("fileevnt",event.target.files[0].size);
    if (event.target.files && event.target.files[0]) {
      if(event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png'
      || event.target.files[0].type === 'image/jpg' || event.target.files[0].type === 'image/gif')  {
      //if(event.target.files[0].size < 200 * 200){
          if(event.target.files[0].size < 5000000){
            alert('File size exceeds 5 MB');
           var files = event.target.files.length;
           for (let i = 0; i < files; i++) {
                var reader = new FileReader();
                reader.onload = (event: any) => {
                   //console.log(event.target.result);
                   const img = new Image();
                   //img.src = reader.result as String;
                   img.onload = () => {
                     const height = img.naturalHeight;
                     const width = img.naturalWidth;
                     console.log('Ht and wd', width,height);
                   }
                   this.images.push(event.target.result); 
                   this.myForm.patchValue({
                   fileSource: this.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);
              }
            }   //file size is 5 MB
         //}
      }
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

   removeSelectedFile(index){
     debugger
     this.images.splice(index, 1);
     this.fileList.splice(index, 1);
   }
   
}
