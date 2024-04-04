let questions = [
    // { "title": "Вопрос 1", "number": 1, "difficulty": 30, "answer": 
    // `
    
    // `, "language": "java" },
   { title: 'A+B', number: 1, difficulty: 1, answer: `
        a,b = map(int, input().split())
        print(a+b)
    ` , "language": "python" },
    { title: 'Katta-kichik', number: 2, difficulty: 3, answer: `
    x, y = map(int,input().split())
    if(x>y):
      print(">")
    elif(x<y):
      print("<")
    else:
      print("=")
    ` , "language": "python" },
    { title: 'A+B', number: 3, difficulty: 35, answer: `
    a = int(input())
    b = int(input())
    print(a+b)
    ` , "language": "python" },
    { title: 'Direktor Tashrifi', number: 4, difficulty: 2, answer: `
    a, b = map(int,input().split())
    print(b,a)
    ` , "language": "python" },
    { title: 'Ko\'paytma', number: 5, difficulty: 15, answer: `
    //C++
    #include<bits/stdc++.h>
    using namespace std;
    int main()
    {
        long long x,n, y ,z,res=1,r=0;
        cin >> n;
        if(n==-1)
        {
            cout<<1; return 0;
        }
        if(n==0)
        {
            cout<<-1; return 0;
        }
        if(n<0)
        {
            n*=-1;
            r++;
        }
        for(int i=2; i*i<=n; i++)
        {
            if((n/i)*i==n)
            res++;
            if((n/i)*(n/i)==n)
            { 
             r++;
            }
        }
        if(r>1)
        cout<<2*res-1;
        else
        cout<<2*res;
    }
    ` , "language": "c++" },
    { title: 'Dasturchilar kuni', number: 6, difficulty: 13, answer: `
    //C++
    #include<bits/stdc++.h>
    using namespace std;
    int main()
    {
        long long yil, z, r=0;
        cin >> yil;
        
        if((yil%400==0)or(yil%4==0 and yil%100!=0))
        {
             cout<<"12/09/"; 
             z = yil;
             while(z>0)
             {
                 z /= 10;
                 r++;
            }
            for(int i=0; i<4-r; i++)
            cout<<"0";
            cout<<yil;
        }
        else
        {
            cout<<"13/09/"; 
             z = yil;
             while(z>0)
             {
                 z /= 10;
                 r++;
            }
            for(int i=0; i<4-r; i++)
            cout<<"0";
            cout<<yil;
        }
    }
    ` , "language": "c++" },
    { title: 'Bayroq', number: 7, difficulty: 15, answer: `
    //C++
    #include<iostream>
    using namespace std;
    unsigned long long f_find(int n)
    {
        unsigned long long a = 2,b=2, s=0;
        if(n==1 or n==2)
        return 2;
        for(int i=3; i<=n; i++)
        {
            s =a+b;
            a = b;
            b = s;
        }
        return s;
    }
    int main()
    {
        int n;
        cin >> n;
        cout<<f_find(n);
    }
    ` , "language": "c++" },
    { title: 'Minimum va maksimum yig\'indi ', number: 8, difficulty: 5, answer: `
    a,b,c,d,e = map(int,input().split())
    x = a + b + c + d + e
    minn = min(a,b,c,d,e)
    maxx = max(a,b,c,d,e)
    print(x-maxx,x-minn)
    ` , "language": "python" },
    { "title": "Yolg'iz son", "number": 9, "difficulty": 10, "answer": 
    `
    //C++
    #include<bits/stdc++.h>
    using namespace std;
    int main()
    {
        long long n;
        cin >> n;
        long long ar[n];
        for(int i=0; i<n; i++)
        cin >> ar[i];
        sort(ar,ar+n);
        for(int i=0; i<n-1; i+=2)
        {
          if(ar[i]!=ar[i+1])
          {cout<<ar[i]; return 0;}
        }
        cout<<ar[n-1];
    }
    ` , "language": "c++" },

    { "title": "Yangi yil sovg'asi", "number": 10, "difficulty": 3, "answer": 
    `
    x = int(input())
    a,b,c = map(int,input().split())
    if(x>(a+b+c)):
      print("No")
    else:
      print("Yes")
    ` , "language": "python" },
    { "title": "2-max", "number": 11, "difficulty": 7, "answer": 
    `
    //C++
    #include<bits/stdc++.h>
    using namespace std;
    int main()
    {
      long long n;
      cin >> n;
      long long a[n+1];
      for(int i=0; i<n; i++)
      cin >> a[i];
      sort(a,a+n);
      cout<<a[n-2];
    ` , "language": "c++" },
    { "title": "O'yin", "number": 12, "difficulty": 20, "answer": 
    `
    //C++
    #include<bits/stdc++.h>
    using namespace std;
    typedef long long ll;
    ll prime(long long n)
    {
        long long x,l=0;
        long long ar[n+1]={0};
        for(long long i=2; i<=n; i++)
        {
            if(ar[i]==0)
            l++;
            if(ar[i]==0)
            {
                for(long long j=2*i; j<=n; j+=i)
                {
                    ar[j]=1;
                }
            }
        }
        return l;
    }
    int main()
    {
        long long n;
        cin >> n;
        if(prime(n)%2)
        cout<<"Ali";
        else
        cout<<"Bobur";
    }
    ` , "language": "c++" },
    { "title": "Virus №1", "number": 13, "difficulty": 3, "answer": 
    `
    x, y = map(int,input().split())
    if(x==0):
      print(1)
    else:
      print(y+1)
    ` , "language": "python" },
    { "title": "Virus №2", "number": 14, "difficulty": 15, "answer": 
    `
    mod = 1000000007
    def s(a, n):
        if(n==0):
            return 1
        elif(n%2==1):
            return (s(a,n-1)*a)%mod
        else:
            return (s(a,n//2)*s(a,n//2))%mod
    x, y =map(int,input().split())
    print(s(y+1,x))
    ` , "language": "python" },
    { "title": "Virus №3", "number": 15, "difficulty": 20, "answer": 
    `
    m = 10 ** 9 + 7
    d = {}
    def bp(x, n):
        if n == 0:
            return 1
        return ((x % m) * bp(x % m, n - 1) % m) % m if n % 2 > 0 else (bp(((x % m) * (x % m)) % m, n // 2)) % m
    def f(n, k):
        if n in d:
            return d[n]
        else:
            d[n] = (bp(k, n) % m + f(n - 1, k) % m) % m if n % 2 > 0 else (((bp(k, n // 2) % m) * ((f(n // 2, k) % m))) % m + (f(n // 2 - 1, k) % m)) % m
        return d[n]
    n, k = map(int, input().split())
    d[0] = 1
    d[1] = k + 1
    ans = 0
    if n > 0:
        ans = f(max(0, n - 1), k)
    print(ans)
    ` , "language": "python" },
    { "title": "Natural son", "number": 16, "difficulty": 30, "answer": 
    `
    birlik = {
    1: 'bir',
    2: 'ikki',
    3: 'uch',
    4: 'to\'rt',
    5: 'besh',
    6: 'olti',
    7: 'yetti',
    8: 'sakkiz',
    9: 'to\'qqiz'
}
unlik = {
    1: 'o\'n',
    2: 'yigirma',
    3: 'o\'ttiz',
    4: 'qirq',
    5: 'ellik',
    6: 'oltmish',
    7: 'yetmish',
    8: 'sakson',
    9: 'to\'qson'
}
ans = []
n = int(input())
i = 0
while n > 0:
    x = n % 10
    n = n // 10
    i += 1
    if i % 3 == 1 and x > 0:
        ans.append(birlik[x])
    if i % 3 == 2 and x > 0:
        ans.append(unlik[x])
    if i % 3 == 0 and x > 0:
        ans.append(birlik[x]+' yuz')

    if n % 1000 > 0:
        if i == 3:
            ans.append('ming')
        if i == 6:
            ans.append('million')
        if i == 9:
            ans.append('milliard')
        if i == 12:
            ans.append('trillion')


ans.reverse()
print(*ans)
    ` , "language": "python" },
    { "title": "G'aroyib son", "number": 17, "difficulty": 20, "answer": 
    `
    #include<bits/stdc++.h>
using namespace std;
bool MagicNumber(long long n)
{
    long long s,x;
    x = n;
    s = 0;
    while(x>0)
    {
        s+=x%10;
        x=x/10;
    }
    s = s * s;
    if(n % s ==0)
    return 1;
    else
    return 0;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    long long n, l=0,i;
    cin >> n;
    for(i=1;l!=n;i++)
    {
        if(MagicNumber(i)==true)
        {
            l++;
        }
    }
    cout<<i-1;
}
    ` , "language": "c++" },
    { title: 'Sehrli kvadrat', number: 18, difficulty: 15, answer: 
    `
    #include<bits/stdc++.h>
    using namespace std;
    int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int vaqt[15], soat, min, id_1, id_2, farq;
    string vil[15], vil1, vil2, v;
    vil[0] = "Andijon";                     vaqt[0] = -12;
    vil[1] = "Angren";                      vaqt[1] = -3;
    vil[2] = "Farg'ona";                    vaqt[2] = -10;
    vil[3] = "Namangan";                    vaqt[3] = -9;
    vil[4] = "Buxoro";                      vaqt[4] = 20;
    vil[5] = "Jizzax";                      vaqt[5] = 7;
    vil[6] = "Navoiy";                      vaqt[6] = 17;
    vil[7] = "Qashqadaryo";                 vaqt[7] = 14;
    vil[8] = "Samarqand";                   vaqt[8] = 10;
    vil[9] = "Sirdaryo";                    vaqt[9] =  3;
    vil[10] = "Surxondaryo";                vaqt[10] =  11;
    vil[11] = "Xorazm";                     vaqt[11] =  35;
    vil[12] = "Qoraqalpog'iston";           vaqt[12] = 36;
    vil[13] = "Toshkent";                   vaqt[13] = 0;
    cin >> vil1;
    cin >> v;
    cin >> vil2;
    soat = v[1] - '0';
    min = (v[3] - '0') * 10 + (v[4] - '0');
    
    for(int i=0; i<14; i++)
    {
        if(vil[i] == vil1)
        id_1 = i;
        if(vil2 == vil[i])
        id_2 = i;
    }
    farq = (min - vaqt[id_1]) + vaqt[id_2];
    //cerr << farq << endl;
    if(farq > 59)
    {
        soat++; farq = farq - 60;
    }
    else if(farq<0)
    {
        soat--; farq = 60 + farq;
    }
    if(farq > 9){
            cout<<0<<soat<<":"<<farq<<endl;
        }
    else
    {
            cout<<0<<soat<<":"<<0<<farq<<endl;
    }
}
    ` , "language": "c++" },  
    { "title": "Niqob - №1", "number": 19, "difficulty": 3, "answer": 
    `
    x, y = map(int,input().split())
    print(y//x)
    ` , "language": "python" },
    { "title": "Niqob - №2", "number": 20, "difficulty": 3, "answer": 
    `
    x, y = map(int,input().split())
    print(y-x*(y//x))
    ` , "language": "python" },
    { "title": "Partalar", "number": 21, "difficulty": 6, "answer": 
    `
    x,y,z=map(int,input().split())
    s = 0
    if(x%2==0):
      s = s + x//2
    else:
      s = s + x//2 + 1
    if(y%2==0):
      s = s + y//2
    else:
      s = s + y//2 + 1
    if(z%2==0):
      s = s + z//2
    else:
      s = s + z//2 + 1
    print(s)
    ` , "language": "python" },
    { "title": "Ikki xonali sonning birinchi raqami", "number": 22, "difficulty": 3, "answer": 
    `
    x = int(input())
    print(x//10)   
    ` , "language": "python" },
    { "title": "Oxirgi raqam", "number": 23, "difficulty": 3, "answer": 
    `
    x = int(input())
    print(x%10)
    ` , "language": "python" },
    { "title": "Vaqtlar oralig'i", "number": 24, "difficulty": 9, "answer": 
    `
    a, b, c = map(int,input().split())
    a1, b1, c1 = map(int,input().split())
    
    print((a1-a)*3600+(b1-b)*60+c1-c)
    ` , "language": "python" },
    { "title": "Elektron soat", "number": 25, "difficulty": 20, "answer": 
    `
    x = int(input())
    h = (x//3600)%24
    m = (x%3600)//60
    s = (x%3600)%60
    if(m<10):
        min = '0'+str(m)
    else:
        min = str(m)
    if(s<10):
        sec = '0'+str(s)
    else:
        sec = str(s)
    print(str(h)+":"+min+":"+sec)
    ` , "language": "python" },
        { "title": "Ketma-ketlik yig'indisi", "number": 26, "difficulty": 15, "answer": 
    `
    t = int(input())
    
    for i in range(0,t):
        n = int(input())
        s = ((n+1)*n - n)%1000000007
        print(s)
    ` , "language": "python" },
    { "title": "Raqamlangan to'plar", "number": 27, "difficulty": 25, "answer": 
    `
t = int(input())

while(t>0):
    t = t - 1
    x, y = map(int,input().split())
    if(x//2>y):
        ans = y*2+1
    else:
        ans = (x-y-1)*2
    print(ans)
    ` , "language": "python" },
    { "title": "Nuqta", "number": 28, "difficulty": 5, "answer": 
    `
#include <bits/stdc++.h>
using namespace std;
int main(){
    int n, a1, a2, b1, b2, res1, res2;
    cin >> n;
    for(int x=0; x<n; x++){
        cin >> a1 >> a2 >> b1 >> b2;
        res1 = b1-a1 + b1;
        res2 = b2-a2 + b2;
        cout << res1 << " " << res2 << endl;}
    return 0;
}
    ` , "language": "c++" },
    { "title": "Juft bo'luvchilar", "number": 29, "difficulty": 20, "answer": 
    `
    #include<iostream>
using namespace std;
typedef long long ll;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    ll n, t, l;
    cin >> t;
    while(t--)
    {
        cin >> n;
        l = 0;
        if(n%2!=0)
        cout <<0<<endl;
        else {
        for(int i=2; (i*i)<=n; i++)
        {
            if(n%i==0 and i%2==0)
            {
                l++;
                if(n%(n/i)==0 and n/i != i and (n/i)%2==0)
                l++;
            }
            else if(n%i==0 and n%(n/i)==0)
                l++;    
        }
        cout<<l+1<<endl;}
    }
}
    `,"language": "c++" }
];

export { questions };

