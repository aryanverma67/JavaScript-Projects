#include<iostream>
using namespace std;
int main(){
    int arr[9] = {1,2,3,4,5,6,7,8,9};
    int s;
    cout<<"enter your element which yu find:  ";
    cin>>s;
    for(int i=0;i<9;i++){
        if(arr[i]==s ){
            cout<<"the value is find"<<endl;
        }
        else{
            cout<<"the value is not find"<<endl;
        }
    }
    


    
// int marks;
// cout<<"enter a marks"<<endl;
// cin>>marks;
// if(marks<=0 && marks<=10){
//     cout<<"yu are fail";
// }
// else if(marks>=30 && marks<=50){
// cout<<"yu are pass";
// }
// else if(marks>=50 && marks<=60){
//     cout<<"yu passing with the grade D";
// }
// else if(marks>=60 && marks<=70){
//     cout<<"yu passing with the grade C";
// }
// else if(marks>=70 && marks<=80){
//     cout<<"yu passing with the grade B";
// }
// else if(marks>=80 && marks<=90){
//     cout<<"yu passing with the grade A";
// }
// else if(marks>=90 && marks<=100){
//     cout<<"yu passing with the grade A+";
// }





}
