#include <stdio.h>
#include <string.h>


void convertUpToDown(char str[]){
    for (int i = 0; i < strlen(str); i++){
        if (str[i] >= 'A' && str[i] <= 'Z'){
            str[i] -= 'A';
            str[i] += 'a';
        }
    }
}

int main(){
    char str[100] = "nAsiGoReng";
    convertUpToDown(str);
    printf("%s", str);
    return 0;
}