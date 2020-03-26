import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: any = {
    username: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public auth: AuthService) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    //check apakah sudah dalam kondisi login?
    let status = localStorage.getItem("isLogin");
    if (status == "true") {
        // this.navCtrl.setRoot(HomePage);
    }
  }

  login() {
    this.auth.login(this.credentials).then((resp) => {
        let toast = this.toastCtrl.create({
            message: "Berhasil",
            duration: 3000,
            position: 'bottom'
        });
        // toast.present();
        // this.navCtrl.setRoot(HomePage);
    }).catch((err) => {
        let toast = this.toastCtrl.create({
            message: err,
            duration: 2000,
            position: 'bottom'
        });
        // toast.present();
    })
  }

}
