# print("hi python")
import requests
import csv
import datetime
import json
pre='https://codeforces.com/api/user.status?handle='
handle=['jahirul']
suff='&from=1&count=1000'
headers= {
    'Accept': 'application/json',
    'Content-Type': 'apllication/json'
}
for i in range(len(handle)):
        url=pre+handle[i]+suff
        response=requests.request("GET",url,headers=headers,data={})
        myjson=response.json()
        # ourdata=[]
        # csvheader=[' Submission ID ','  Username  ','Problem_Name  ','Language','Verdict','Date']
        # for x in myjson['result']:
        #     date=datetime.datetime.fromtimestamp(int(x['creationTimeSeconds']))
        #     lisiting=[x['id'],handle[i],x['problem']['name'],x['programmingLanguage'],x['verdict'],date]
        #     ourdata.append(lisiting)
        # with open('codeforces'+'.csv','w',encoding='UTF8',newline='') as f:
        #     writer=csv.writer(f)
        #     writer.writerow(csvheader)
        #     writer.writerows(ourdata)
y = json.dumps(myjson)
print(y)