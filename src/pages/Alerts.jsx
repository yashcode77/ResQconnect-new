import React from 'react';

// Sample alerts data
const alertsData = [
    {
      id: 1,
      agencyName: 'Fire Department of Mumbai',
      agencyLogoLink: 'https://cdni.autocarindia.com/Utils/ImageResizerWM.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FFeatures%2FDSC_5983-copy.jpg&c=0',
      type: 'emergency',
      timestamp: '2023-09-25 10:00 AM',
      message: 'Flood Warning',
      severity: 'critical',
      location: 'Mumbai',
      locationMapLink: 'https://maps.google.com/?q=19.075983,72.877655',
      source: 'Local Authorities',
      contact: {
        phoneNumber: '+91 1234567890',
        email: 'mumbai.alert@example.com',
      },
    },
    {
      id: 2,
      agencyName: 'Delhi Police Department',
      agencyLogoLink: 'https://pbs.twimg.com/ext_tw_video_thumb/1540552786969915392/pu/img/Uou-Wp3B4CqVMHDK.jpg:large',
      type: 'alert',
      timestamp: '2023-09-25 11:30 AM',
      message: 'Traffic Congestion',
      severity: 'moderate',
      location: 'Delhi',
      locationMapLink: 'https://maps.google.com/?q=28.6139,77.2295',
      source: 'Traffic Control',
      contact: {
        phoneNumber: '+91 9876543210',
        email: 'delhi.police@example.com',
      },
    },
    {
      id: 3,
      agencyName: 'Red Cross Society of Bangalore',
      agencyLogoLink: 'https://redcrosskarnataka.org/wp-content/uploads/2021/01/cropped-Final-Logo-1536x1536-1-1024x1024.png',
      type: 'emergency',
      timestamp: '2023-09-25 1:15 PM',
      message: 'Medical Camp Setup',
      severity: 'informational',
      location: 'Bangalore',
      locationMapLink: 'https://maps.google.com/?q=12.9716,77.5946',
      source: 'Red Cross Society',
      contact: {
        phoneNumber: '+91 7890123456',
        email: 'bangalore.redcross@example.com',
      },
    },
    {
      id: 4,
      agencyName: 'Coast Guard Chennai',
      agencyLogoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Indian_Coast_Guard_Logo.svg/1200px-Indian_Coast_Guard_Logo.svg.png',
      type: 'emergency',
      timestamp: '2023-09-25 2:45 PM',
      message: 'Storm Warning',
      severity: 'high',
      location: 'Chennai',
      locationMapLink: 'https://maps.google.com/?q=13.0827,80.2707',
      source: 'Coast Guard',
      contact: {
        phoneNumber: '+91 9876543210',
        email: 'chennai.coastguard@example.com',
      },
    },
    {
      id: 5,
      agencyName: 'Health Department of Kolkata',
      agencyLogoLink: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERUSEBMWFRUVGB4YGBcWGSAfHRcaHR0YFhgbHxoYHSggIB4lHRgfITEiJykrLi4uFx8zODMvNygtLisBCgoKDg0OGxAQGy8mICUvLTAtLS0tLS0yMi8tLy0tLy8tLy8tLS0vLS0tLS01LS8vLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEQQAAIBAgQDBgIGBwcEAgMAAAECEQADBBIhMQVBUQYTImFxgTKRQlJyobHBBxQjM2KC0UNTkqKy8PEVJMLiY7M0g6P/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/8QANREAAQMCBAMHAwQCAgMAAAAAAQACEQMhBDFBURJhcRMigZGxwfAFodEyQuHxI1IUojOS0v/aAAwDAQACEQMRAD8A7hSlK6uJSlKEJSlKEJSlKEJSlKEJSlYMRiktibjqg6swH40I5rPSoe/2lwqfFeX2Bb/SDWqe2eE/vCfRW/MUwUapuGnyKS7E0WmC8DxCsVKrg7aYT65H8jfkK2bPafCvteHuCPxFBoVRm0+RXG4mi4wHt8wpqla2Gxtu58Dq3owP4Gtmlp/NKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKV8YxqaqHHu2SpKYeHbYufhHp9b8PWmU6T6hho+c0qtXp0W8TzHzRWjF4tLS57rqijmxiqrxPt0iyMOhuH6x0HsNz91UjG4y5ebPdcu3U8vQbAelYK06X09jbvM+n5WJW+q1HWpiB5n8DpdTGO7T4q6dbhUfVTQfMa/OohjJk6nqd/nXylXmMawQ0Qs2pUdUMvM9Vs4XBlwzFlREjNcYwFkwBIBJJ5ACakreBtW1TOq32uEhMrmCAqkHwwdSdiQRG1Z7NoXbNtrckWQZWB4JDZ2JJnxqxg6DSNxXnA2PAXELqwPTUDIYME5THhzKSGBExFY2KxtbjLB3R91r4bB0g0OPekeHgMrec35LCmES8jC3Z7q6FVwpcwQWymS7EbGZn6JrQxOAKKHVldCSudDoGESpJAg6j1nSamsVhoBObNqc0kiSNcwQkn6AEz9IQBBNLeGFkM7ytoqRA+G4DnhViPFm15xAaYImOHxtYENPev1PwKVbBU3AnKBnYDXQADqfJVodalMD2hxNr4bzR0PiH+aY9oqLpW49odZwlYrHuYZaYPKyvPDu3Y0GItx/En5qdfkTVr4fxC1eXNadWHONx6jce9cbrJh77W2D22KsNipg1Rq/T2Ouy3otKj9VqstU7w8j+D4+a7ZSqNwLttsmLH/AOxR+Kj8R8qulq6rAMhBB1BGoI9ay6tF9Iw4LboYinWbLD4ahZaUpS05KUpQhKUpQhKUpQhKUpQhKUpQhK1sbiktIXuMFUbk/wC9T5UxeLS0jXLhhVEk/wC+flXL+0PHHxVyT4UX4E6eZ6k/dt62MPh3VjyGZ+a+ip4zGNw7d3HIe55eq2e0Xaa5iSUWUtfV5t5n/cetV+lK3adNtNvC0LzVSq+q7ieZPz7JWXDYZ7jBLalmOwA1/wCPOsVW79HeJtrduKxAdwMk84nMB57GPLyqNeoadMuAmFPD0hVqtYTE/gqt4/ht2yQL1tknadj7jStWujdv8RbGGNtiM7MpUcxB1PpEj3rnNQw1Y1afERCnjMO2hV4GmbeXL5upvszBN22fidRl/iysHK+4HX6Mc6mRYHdMi8hlYgc9AJECCQwPQ/Iiq8Mci9bI3DiPWRXrugLrsrMs4hlRydSAHDMeZBIX11FZf1NvDVDtx6WWh9Pqf4uGMj63/KsNvBMquQT4jAIEicxmdMo5ifI1pdp4VbNqZIzN9lWyhRB1E5S0GYmoU3rhT9ZF3Nci0WMwVGZjyAEBvDHIGtvtAxOKvTyZh7AwNPQCufTWB1Xi2HrZGOrDsYAzjyufVoUdWxgsDcvNlsozneByHmdh71r1fP0d4m33b25AuE5o5ssACOsGfn51rYiqaVMvAlZ2EoCtVDCY+ac1Ssbg7llst1CjbweY6g7H2rBV5/SLiLZW3bkG4CT5qIjXpJj/AA1RqMPVNWmHEQuYqiKNUsaZj5fmlS3AePXcK3h8VsnxKTofPyP+zUTSmvY144XCQlMe6m4OaYK7HwvidvEWxctGRzHNT0I61u1x3g/FLmGuC5bP2lOzDofyPKuqcJ4kmItC5bOh0IO6nmDWHicKaJkXHzNekweNFcQbOGY9x89it6lKVVV5KUpQhKUpQhKUpQhK+EwJNfap/bvjWRO4tnxOJcjkvT+b8B50ylTNR4aEqvWbRpl7tPvyVe7W8dOJuZUP7JD4f4jtJ/Ly9agKUr0NOm2m0NavJ1ajqry92Z+QlWjgHZI4iz3r3MgM5QBOxiTr1G1Vep7gvam7hrfdKquupXNPhnU7bidYpeIFUs/xZ/N7JuFNEVP8wtH38LqK4lg2s3XtPBKGJHPYg+4INaxrNjMS1241xzLOZJ/3y5e1Yaa2YE5/PdIdHEeHLTpp9kJpSlSUVNcKZbNi5iGLZjK24GsgKzkEnQ5ZE+tfLOORkdnR8qeEbTdLliToMoBzE6CPIV54VibTWzh75ZFZsy3BBykjK0q2hBEVvf8ARrAQoL9u6DvBt2x1BhXifbXnXn8dTqmsTBjTot3BuaaTQwi2fX5ERoIWjZu2hZZWR1CKFfOV0EEK8wOcDTY+VbPGVS7ZW4pbvEALhgAcrNkAldDlIj3r1h+DWTo11VBMt+1tnMYIEnNMCTpG5rW4tes20OHw3iEgvc08US0DKIiTJPMgVzBU6orAgdemqlinNFEh8ZW3kZZba8lDUpSvQrASsmGsl3VF+J2Cj1JgfjWOvdq4VYMpgqQQehBkH51wzFl0RPL57K08W7GmzZa4t3OUEsCsCB0M8qqdWLifa+9esm0VChhDFZlhzGu01XaRhhVDT2ufzays4s0C8dgLRzz8b9eaVKdneMthbuYaodHXqOo9OXy51F0pz2Ne0tdkUhj3McHNNwu1WLyuodDKsJBHMGs1UHsFxnK36s50aTbnkdyPfcec9av1eerUjSeWlerw1dtemHjx5FKUpSk9KUpQhKUpQha+LxK2rbXH0VASfauPY/FteuNdf4nMny6D0A09qu/6ROIZbaWAdbhlvQbD3Ov8tUGtf6fShhedfT+15/6rW4qgpjIep/Ay6pWbCW1a4iu2VSQGboCQCfYVhpWgRIhZYVq7Y8Ew+HRDZlWYwVLEyIJnXzgdNaqtfIr7UKTCxsOdPMplao2o8ua0NGw/oJSlKYlJXuzaLEKokn/k6nYAazyivtmyzmFExqeQA6knQDzOleLzs84fBg3XYftLi6DL0kwAk7sYmANviq4rFNoN56BOo0jUPL5Yc/TXn8fHYZDBZrp5lAFHszSW9cor6mKwzf2xQ9LiH7jbzT7gVJYDsNpOIuEmCclsbx8QzsDJHQKdjBNTmH7J4YTlsC5EiWZ21AlT4H2O3wgg8qyW4vFTxE+YELSGC4hHCB4n2Puqk1ywN8Sn8q3J+WQD7xWM8Sw48MXT/F4V/wAsn/VV3udlcMdP1VQCdz3ggZZnQj6Xh57zrtURiuxdhxNpntExoSHXMVLRvygg/tOQ01E9fi8UdR4Qj/gBuQH397eihcqsneWmzqNDIhkJ2BWTE8iCQY3nSsdeL/CsRgm73KLloiCyyUZW5NswB0IJA1AIJitpbS3FL4cllGrKfit+oHL+IaHyOlXsJju07lSzvKfZUq2GLbtHUe43HnHRYKUpWiqiVY+xvCLGIe4L5LFQMqAkTMydNTED51XKRS6rC9paDHNNpPax4c5vEBoVu8Yw6W79xLTZkUwDv7T5HT2rSpSptBAAJUHGSSBHJerdwqQymCCCCORGoNdd4JxAYiwl0bkeIdGGjD5/dFcgq4/o74hld7BOjDMv2ho3zEf4apY+lxU+IZj0Wh9LrcFbg0d66fjrCv8ASlKxV6NKUpQhKUrBi74t23c7IpY+wJ/KhHVcu7XYzvMXcPJTkHoND/m196yXeyuIAlQLmgJVSCyyAYKmDOtQjEmSdzqfXc1ZbmOwd27+su923cMM9sAnMQAPC42Bjn91b7g+m1rWZAbTt4ib3y3XlGOp1nudUzJBEuDbGZzBBi1vLZVy9aZCVdSrDcMII9jWTGYbu2yEyQqk6fCWAMecAj3kcq21ufrOLzPtcbMw6KPEw9lH3VpYnEG47Od2YsfczTWlxIB2v1PwpJDQCRvA6DOedx91ipSlMUErJcvLat944zFiRbQzBIjMzRrAkCBuTvoax1i4xhmuXMNaQSzW4UebPcPsNZnpVH6hWdTpd3MmE/Ds4nHkPcAev5tZZOE4bEY9+7LkWlILQAFHMBVWFLmDE8gSTAroXCOFIid3aXIg3PiBMjdpVXFwcuZB0ygisXBOF20trZt5WVZzHwsGPhLMwMkNMEAxHgGymt7jWN7pVVZGYnRfiygFmbWecZm1MEnesmnSM81usYKbeJ2fy3T1W4LVtASY6lniJgCY2mABJk6b1rXOO25ADM5MwEBMwCdOR0UxG8GKjBwy9fyNcueBhsGBKAaoykqZY82mRAIJ2rYbDYS2fEAWknWWOuYkT0ksYP1jTwxvU8kGo6NAOfyPNbmF40jozrmhImBJ1/hUk/dWexi7d7VSr+ezD30YVHDFYXKVjKrRIggaAKPh20EVq3+C6C5h3kLJVAfMmAwIg+NumyDQAyGm2b2QKjtIO8KUxOChSbYmAfDHRSqrAEZdpgbLqGk1Re03ZvuycRg5XKSSqaEASCyQZA0JgctV0kLbuD8XcsLV74xIzAQAw+iepiDI01G0rO/i8P8ATQak6gQJPiya8hmadNmgxqZVVpaO81IhlVvyy5RguM5yExMENp3sAMh5E5R4x1nXmDpB2rtsqxVhBUkEeY0NYe2PCVs3RctR3N6SsDQHQkD+Eghh5NHKtnGGWQnnatEnqTaQk/Orf02q/idTcch7rGxbIEnOY6gg/gXWClKVrqis+Cs53VC2XMcoJ5E6D2mPSsQtmcsHNMRGs7RHWa81IcUcrdF5dC4DjyYwX+Tg/KoSeKN/X+j9lMNBZOxHkfwfVeMNwy45QRlDv3YY6ANpKnmDr0r7gL5w+IR20Nt/F6Aww+UirBc425VrmHwYys+cu+ZxnOkgbA8tKr/GbNxbzd9HeHxMBGhOsGNAeopNN7nkteAJBtIJ55TkM7+qs1abKbQ6kSSCDMEDkbxmRNuey7CDNfajOzmI7zC2WmTkAPqvhP3ipOsFwLSQdF6hrg4BwyN0pSlcXUqI7V3smDvN/DH+IhfzqXqu9vG/7K55lf8AUD+VMoiarRzHqk4lxbRe4aA+ioXAsaLF03TMqr5Y+sVKjflrU4OO27qRd7tz3DFmNsZjdkhcpiNiPlVd4dxFrDFkVWJEQy5hyO3tVo7QXbRs3mC4bK+TuSijvNSC+bpAmtbEMaag4m55Hx6c5z3WFhKjm0ncLh3bkQfzyjLUKtcK8Iuv9RGHu5W1+DmtO3bLEKoLE7ACSfYVuYT9xiP5B/mLflWrYLA+Cc3KJn+tWhm4/MgfUlUT+ljdP5I84AU1Z4IqvZNxu8Rmy3BbBLK8AhdN99Y+q3Otfj2CFjurcqWysWZdiCxCanXTL7Sa94bi2JWQ+e4pBUq0mQQV0Y6gwdCKw9oI71QohVtoAOkKCwnmQxM+dIb2naDiO+Xj977XtcwrVTseydwCDIz0y627u8i9hK0LVoswVRJYwB5nQVJ9nFS7i7+JkG3ZC27ZJAB0yAydsyI3vcFROLxHdWSy/HcJQH6q6G4R5kMonoTVg/R+MmFzgxN1uYGii2RvvqDoNTMaa1Qx1bjrCmP2+v8ACfgacXOt/Kw9SfJXfDIQupJLcyZ0BMawJEktt9KtPHcIS7dW5cZiFEBOQPi1ncHxAyCPhFSJTLC/VAHyAFYcZdyW3b6qk/IUhruEStV7Q6xVe41xUhu5swqroSOfkPKtW3gncBgUAO2v/OtRuWNSZHnMzNS3DODs8FxA3jqOpPIVgY7F4imLVAJNgO/OgDYzJzsd5iyjRYKr/wBM+MQsbcOfm6n3P9K9W1u4aHBEEwQDofUVLYW7ZZrlu0yt3arJX4ZJIIB5kRqard2WYxzJP41ns/5pxAY93eIBzvckATMTbcjxmHVWUWM4m89dvX7KzfqNnElL2vmoO5lSJO4yleRG9S4A2OoIgjqDvUF2YYgOusaET8j+VTtevHHwgPzhIYQRxDX2VU7YYHvMPeQ6uozjmZTMSTyUFQ4AHWaqGHud5YttzT9m/lEsh91MfyGul49AbiqSPHGhaJnKphfpGLZ30AJ61yDgOI7u6Eb4LhCXB5EgSPNT4h6EbE1FlbsarXna6rYynxnh3t42I+5MnaVL4S2GdVYwGME9ASATU1d4HbQqC73DcJC5EAEqcrLmZtCD5ba1Am205Rq0wI6+VWnFYjEWb1/JaJVyWllMISsswJ2IDEEkx12rZxBdIDXaHUD25+MdFm4ZrCCXtOYvBMTJyBG3gTOQKhOMYRbZXIrBGEqzGe8G0iAIHTSYg868YoTYsH6puL8itwf/AGGvGOwly3k7waMsoQQykeTKSOfLrWbfCfZufiv/AK0wGzTM3z8x/fOcktwlzxEWy8jsLWtyhTfCuP2bVu1na7mthwbaRlbMWgmecEHTmKhOLd2xV7Vp7atPidixuGZJk+usda3uAX8MqHvMi358LXVZ1CwOSmAZnUjpWbtiWd1ui4ty0YVMrSFMDMMo2kiq7OFlaACJnMm+ZsIjW0ncq08uqYfiJBiLC5GQkmZFheBe2is36P7k4MD6rsPnDf8AlVmqo/o4b9jcH/yfkP6VbqzMSIrO6rawRnDs6BKUpSFZSq527H/ZP5Ff9QFWOoXtdaz4O6PIH/Cyt+VNoGKrTzHqk4lvFReBqD6Ln3ZzI15bVy0Lq3SBuQU11IK68/uqR43wOzatvcAaywMLbuMp7wTBKwZiNdRyqL4DccOQl8WMwILkwIkGJjfTl0qTxHZ1IYtiTcum0bygIYIAOpZiZ29a1qruGrJdGVu8Z9h8OawKLC+hAYHG9zwiOn7juMrmLhRGE/8Ax8R6ofvI/wDKsOBNzOBZJDtoMpIJnlIIrPw0Zkvp1Q/5GV/wU174Ld7pziCP3QMA7M7AhR7ak+Qp7jAdvt4CFXa2eC8CM9oc4n7KRw2Exz5/2l0BcwnOYYqYKjXU/wBDvFaPaMP3o7zN+6t6NMj9mszPPQz51MWeP2AWzM5t3WlrLKCLbkhiwMywBE5YG9RXHnzpZuBzclWUuRBZlZidCZ2Yb8opFIv7QcTQBllHP2/Eq3X7PsSGuJOf6pyMZbX/ADdQ2Pw/eWDl1a0xaOqsFBP8pVSfJieRqx9gSWwuUTIuODAGxW2NS2w1Mka6QN6grF4owYRIMwdj1B8iND5GpTsmVtYm/hgfC2W5aLDNAAzAwdyFcN626o46jwVxU0d6x76KWBqAwNRb3HpB8N10VmnxdQD8xNYMZazW3UblSPur7g7mZBoQRoVMSo3UGNJA8J81NL99UGZ2CjqxAGug1NIiRC1idVRcLeCsGImORqcONS/aNu4CFaJExMa/EOU9aw8f4UVY3LYlWMkfVJ39vwrUQz7aVj4T6UH1nF7i1zRAI59QRG4jXNKfiHUm8IAIOYPyVI8LwYtFirMwbKoDDVVXMYkaESah7WkcyTPttP31vWMSybHTpyrBZwRdgqCT06DzPSruF+n1cNiHVanCRDQ0i2RcT3bwbjIxrnIS61dlVjWtBmTIzzjXZTXZ638beg/M/lU1UNjsamDtIoGYk85jqxJAMc4np5GpDh2KF22tzKUDCfFG3WVJERrvtWhUJPfIsp0ob/jm6x4y5FxTJAUAESBtDaj4j8fKBpJ2Fcc4LY728pOiqc9w9EBBb3OwHMsBXSe1XEcmHvXNQSMiiV3eVG3ilVY7n+zOnM0rB2+7wyDY3f2jfZBK2x9xb+YdKQyj21VtPz6JGNqBsHa/oB9xflK+3HJJYaEkn51dUxOVLZwwFwgSiDVSpCB+9loVs0sCfqxPKqlwvDC5et2zsxAP2dz/AJQamcZglvWVvm/lN647BGkWx4tpEhW8zv7Vs4gNc5oP5znOL6HwkaqhhC9rXObmeYGUam37ha82MWg6/aHGqy2rKlSULs5XabhkhPJdp51qbYT7Vwfcp/rWricM1sw0H0dW/wBJMe9bOJMYayOpuN/pQf6DTGtAa0A6/kn3SXvc573OEGMsoyGvLzUnwbhlm7ZXM1pWF7x5nhjbgSB7k9PWtHjfCu5aQyFGJyZXzELMj7or7guA3LyB7b2jM+AuAwgxqDX3jXC/1e3ZV1y3WDl9Z0mE2MbT86g1w7WA/Mm3mfb0CY9hNGTTiAO9vcDbMzlI1Oitf6OB+xuH+P8AIf1q31V/0fJGFn6zsfkFH5VaKyMV/wCZ3Vb2CEYdnQJSlKQrSVrY+x3lt0+urL8wRWzShGea4tgbwt3FZ0DhTJRtiYMT5Tr7VPcPx+MxTd3mY27jQ7C3IQHcaDQeU1H9psL3WLursJlfRtR8iY9q3LeKx+K+FmyDmIRVHmRAge9b1Xhe0PtcZnTpb8TrK8vQ4qbzTlxg5N1ixkzlaNc7Qo7BL3WKC3dgxR/QyjfcTWpcQoxR9chIInmDB/CpHtRhLiXybxVnuAMe72BOkQdeU+c1h4r4sl/+8XxfbWFf56P/ADVNj+KHbj7j4fJJqM4eJn+p12Nr+TfNZ7N7Cp48j3W+jbaFC+rKSX+QB6CsOK4oHtm2bSjxBlyCAuhVhGsyI/w86jqk+G8Je8sopZmkIJAnLGcknQBZA8yw6GhzGN7zj5n4P4vopNqVH9xgAnQD+yTkBfOIjJRleOKYtrV7DX0jMtsHXYw1xYPkVGU+VbWLwr2nKXFKsOR+4gjQjzFYsThhethJC3EJyFjAYHUqZ0GuoJ0ksDEyK/1CmatGWXgzb2Rh3cDy02PlcEHwy/ldC4RxBXRbtvW3cG2mksPDpq1zOzEnqD9cGvfaHhPfqrIZZQcgnRs2hkHy/MbE1zjgnFLuAuZLyOLbmSpGoO2dZ0J6wYIjUEAjo/D+IKUDIQ9ptQQdNMiADSZkknpHiAmayqNXUZrca5tVpa7xHzTbZR3BuJX0bubqNcGYqG+lIGZozRmReummWJmBvBMLdJyOoMkQrAajfQ+u4HOpLu0uMGEFhIHJgNmAjcT0kSPKodezCIlxUdpZMiltcus5jETso/k8zVkPaTOR5LjqbgIPeHNZnwOHTV7gA/idQKwYzjdu0ijDpmL5gpiFzKQCCTBJkwOp5itXD9kcoI70ayJymd1KfSGoCxPnpFTlvhdtV/aDMM2ebkQGgKSNNzqfVjXXOYDdxP2UWMeZ4Whv3Vf4Xwm5iHN6+xKMQRpHeL9Uqdhy+cbKRZMdeyjIIk76xtByjQyeZEdBz0XsZGiAnlOomDBVdCA2+jamNBzFG7VdqBbDWcO8ufC7qYC8oHiIzciRtru3woq1dTloFPuUWkyortxxfvboso0paJk6eJtj8OnhGmmkliNDXrF6FR0tWR//ACSfvmo7AcEaQ2IU27Y1htDcH1VU6weuwHUwDIXXa45P0nOw6k6AeXKrH0xji51U5RHz8rJxlQkQ7MkGOkj3EbwbLLw7Gdy+cKGMMAG2EgrMc9CdPOt1+MocO1j9XUBjIIcwh2zQ0xppExW9jcKmTuHORrJ8VxLZ7sM0CHO86RmAjTaoPG8Pe0RnGh1VgZDDqCNDV9pp1DJEHqdMtgoObVpNIaZbrYGJsQczpHOLXWtW9xnwuLXK0qr/ADEZn/zlvlXnhFsG5mYStsZ28wNQv8zafzV9wGGuYi8AkNcYk6mATuZpxcA6TkB6/wAfYpDWng4W5uMDw/JjxbyU/f7OpctlrIV8tpAotuCWuSM5I9CdPKoDjOCFm73QJJULmnkSoZgPITVjxPATeVrqoti8slodSjRuQQTk9Nvxqr4Oy1+6qSSbhyyTJ1IBMnpv7VWwz5kl8gZjw3kg5GI8VbxlMAgCnBdkd89IBByBmbDxPUOy2G7vCWVO+WT6sS351L14RQAANhoK91iucXEuOq9GxgY0NGlvJKUpXFJKUpQhUj9IuA0t3wPh8Lem6n5yPcVGdmMWCuRhduOv7sBc4TWScpIEydCdBIq/8Uwa3rT2m2YRPQ8j7GD7VyNhcsuyEsjAlWykj1Gm40961MIe1omnqMvnr/Kw8cP+PiBWAsc/D4COcnRTfaDhti2jO15ziCQSrEEn605Zgx1PKovhxzhsOd31t/bGgH80kesdKsFqxh8IGyZbl8It1HujwOCRpbE7xtzmq3xIIbjXLIK2maVkRB0LKCPqk/KKsUXFzeG/IkR0gaDrfMHJVsQ3s3B0AaFoOhmZOpOpAEEtiZC06teHVSMNdGtlbfd3gLgQqZYtzBIYtMDePSoXGjvl79fi2ujoT8L/AM3Po09RUdFOe3tBtn6QdvA/ZV2VOxcdQYI0yMjfoR1EyJUhxLFowVLWbIhbLniQGIMaE6COu5NR9fUEkevp99WziPBQQwWwtrKkrF3MZAlkK5iWnUaAaxXHVG0YadeY389dF1lJ9ficNI0O3iBYaqsWsUVUroyHdWEg+x5+Yg9DXhXuYab+DYhJHeWm8QXkpP1hOgbRlJAnUEyn/Qbgci6y2lADG4duQI03ImCBzFYbuG7rx23W7bMgkAwZBlXRoIkTod+R00rYilSxA7p72h/Jy90yn21K7gYHmOYEzH/UhbfD+21phF9DbOklRmQw2b7QkkzIc+I61P4btFZI/Z4m2ftNl+lMRcYR4dPhEEAxyrn97hVljKO1v+BlzgejBgSPIifM16ThuGX4jcunyy2x8oefurOGHxUwW+cK63Gxm4e/5/6rot7jigGcRaHxQe8Tr4DCXAdtCPcHlUPxDtdhVn9o106iFB1BjQu2XY7MrEjz1mqNg8Mf7O6PMXR+dusLcGtTpiCB52tR8ng/dXXYfEt/Z5Qfdddjg79JHiT7hvutvG9ocRjG7q0BbVpmDqVA8Ra5A8IUawACBrNesLksaWPi53SIJ+x9UeniPM8h4tBLalLQPi+N23cDUCBoqzrAJkgSTAhatM7BUBZjoABJPtVzCYLhHaVs/T2/Co1sS4num+//AM6+QE9M/BPM7nc1O4bBW7a5L5W3euLKk5v2YJBUsBsTGnNQZIrZ4VwjLmdYuXk+ECDbS5vBM+J4kgDwggSTNadh7WJUJdY2740W62q3JMgXOYMmJ+dWn1eMkCYGcZ7g9N7X6XJTodnHEBJyBy2In/Y6bHO9h64nxa+A9m6iqz5e8YSC4GqkkNlM9QNetQveGMsnLMxOk9Y2nzrcuYtlQ2LgDZCQube2QYYAjlI1Go504fZABvXBKIYCn+0bcL6c28vamMAptyHhrtH2/pKeXVXjvE9dBN50O5jPabL3iP2dkW/pXIZ/If2Y95zn1TpXzhl6ws9+lwmRla2wBWPXn/SsdixcxF0gEF2liSQB1Op0HpUzx7gjlEvW7YXQC4iEEKV0BGUnQgT5c6g57GkMcbnO8fBoOVlNlOo8GoxshtgCJ5bRIzOtyRkVi47j8LetAr3hvAgB2ABK85K6MY2MA1ufo+4fnvNeI0tiB6tp9wn5iqoBO1dZ7N8N/V8OifSPif7R3+W3tVfFEUaPZtJvb8+H5VrBNOIxPauAtcwNdPHnyUtSlKyF6BKUpQhKUpQhKo3b/g22JQdFuR8lP5H2q81jvWgylWAKsIIPMHcUyjVNJ4cEnEUG1qZYfPYrkmBxFrfFFmW2vgtj6Wsxm5DWTFWTi9i5etW7TBLSKO8usRC2pEW0HMsFOo5kjaRUD2j4O2FuwJKNrbby6HzH36GsjYnE8QuqjMNBMbKgGjMf6+cCtd7Q/hqNPdzk6dBlOc81gU3uZx0XtJcYEDXq6ZjKI0mNxGWLrWnkDlqCDDA7gg7iP9yKy4zCiO8tSbZMa72z9Vvy+sPOQJXjOOw7WxYXNcNkAW72mpnVSP7uDp0j5wmExTWzKxqIZTqGHMRzH+xrTmFzhxxB56j55ZZJD2sYeAukbjQ6/wAjI2IMrBUrhm/VbfeAjvrg8Ef2andj5tGg5CTzFYrmDW4M2Gkxq1o6lfP+MeY1HMc61MPdysrQGggwdjBmD5VI98R5j2Py+WUpYBpunXQ5gcxvH2PMWmsO9y0qYe2veXbsPcQiQRBKpB2OUliRB1GulbQ4GwR2a2cMMpzZmDW4EEGQe8UyARo3TnULgMQxxC3Gu92xJY3YnKTJmOcnT3rc4hcQWi9uA2JMsAIyqhgjyDPJA6KBVdzHBwAzOZvnPWLAGJBNrq2x7CwkizZAEjKI2LpJI4oIBnXTWbgl7+zAujrbdT9wM/dWqcBcEgowIEwwjQQDuPMVYuGpYK2u4so7Eot43ZOUkhZCaLHRh5TWDD8VuMcU4doCsy6nQm4FBGvRiNOtS7Z94Atvbluf6ug4alAkm85GRYScwOhzg2UDbsM3wgt6SfwpiMM9uA6kTtM6/OrJgMS5sG8925iGBI7oXCAoH0nGaWHOFEdT0ie0jFsS5P0srDyzIG0+dMZVc55bAtP2j85kdEmpRaykHgmTEeIJ0kaZTI1g2Wzw3gaG4FuXQTuy2obKB8TNcaEAHlmrPxMGyGWx3eVCFui2WzxMQWcAwTp4YGorQwPEraWGsvaLd4QSyvlJA2UyG0B1itjifFibQS05i4B3qkDNKQqknmCAuo5g7TFJc2oaneuOcR1t4xz1JTmvoikeGxjSZ6XjlMWIJsFs8b4jaa0St05u9m3bCgKqgeHkCrcpB18xUTj8Wrst0CLh1uCNCQdx9rc+c9a0K3rGBAUXL5KIdVA+K56A8v4jp67U5tNlID5npbP83KS+tUrONtp2EaycvxYXXzDYc3Wa5cbKimXfzOsRzY8vnsDXjFYg3GCopCqIRBrA3PqTuTz9AIYzGl4AAVF+FBsvU69eZOp+6pnhPC27hMThrh79S3gjku4HVspmOYPlQ93AA51tBsPH1IsMhuuMZ2hLGX1O5uMgTpoMybm8AaS8G72yLuHfvCom5bjKU84+kPP/AIGC5Yu4cKc2Q3VnKDBymRqOU7it7F4y2wGJsN3GIU+O2swxO5HTzU/862Dw13G4iJlnOZ2P0RtPttHoKi1zoPGe6M5F+mx5HWy65jJHZiXGILTY89wdC0m1zOilewnB+8u9+48Fs+H+Jv8A139Yro9auAwiWba27YhVED8yfM71tVjV6xqvLvJejwmHFCmGa69flglKUpKsJSlKEJSlKEJSlKELS4rw5MRaNu4NDseankR51yzi3DLmGuG3c5zDDZx5fnXYK0eK8Mt4i2bd0SNwRup6g9atYXEmiYNwflvnsqONwYriRZwyPsfnuuSYPDm5cS2u7kKJ5SYqx28NhXxH6mlhjqV7/Mc2dQSTl2gEbVF8Z4NewdwE/DMpcXaRqPQ+VZm7RuQ2S1bS7cGV7oEFp35wCeZrUqcVQB1MyIteL7neNt+qxaRZRJbVEEG/dmRqBtO9ra2USbTLLCYQxnWYB5eIbExpW0cYlz9+vi/vVAzfzLoH9dD5mp7EY5MLaFizdAuW9bgKZkvFgMwnoo09B1FV7h2BbEXRbSATJJOgUAEkmNhy9xXW1A9pe4QBkbgx/OcXG4UX0jTcKbTJOYsRO2emUwDaQYuvrcLYibRF1d/BqQPsHxD5R51pH8PurIlpoNxQcqkDOAYBO2vKa2Rxe4dLkXR/GoJ/xfH99N742P2P4ny6JH+MxMifEeGRj/2WHAYtrVwOm6gj5yv5z6gV9w2JyW7qR+8AAPSHV/wWKyfrNg/FhyvnbuEfdcD/AI17/wC1P96v+E/0rhjVp020y1Umg5Bw13GYg5gaLDg8VkzeBSWWFY72zuCCNmFfMdjDdfOwE5VUxzygLMctAKzRhf8A5T7KPzNGv4cbYcn7Vz8lVfxotxcXCZ+blduG8PGI8T6NO/38tCt21wxyMzxbU7M+gPoD4m/lBr1/1Rl/cqtofwiW/wAbS/31guWbrKbrKxUmDcIJBPqf610l3Iff+J81wBg3d0sPckdQ09Fsd/Zt/u17xvruNB9m3rPq0/ZFYrFt8ReVc0vcaMzHn5154Y1sXk78TbzeITGm0yNdN/apntIhsXluF7edSClu2sBUBLKSYiSeWu+9LJ4X8AzINz/WUxOQCmG8TON36QRIFvHMZ6G5N9ivmDz4C+HuIHtuCM6wQyncgnYiNQehHnUjj8RZso+SUNwC5Ze18LFTowB/dtqQw2j5Vh43x5UuPaspbe0/iYGTmZxmJJnQg8h/xA8J4XdxLhLQmN2OyDzP5bmkNZ2g7SpbKee0jQjaI5K2+p2TjRpd65gbE5wdQd7EEXMZ/VS5i75yKDcuGSFER1J6DmT+ZrpfAeDJhbeVdWOrt9Y/0HIV94Fwa3hUypqx+Jzux/IdBUrVHE4nte42zR8/oLRwWD7Lvvu8/affc+CUpSqi0EpSlCEpSlCEpSlCEpSlCEpSlCFhxFlXUo6hlOhBEg1R+O9i2WXwviH92TqPQnf0OvrV+pTaVd9Iy0pFfDU64h46HUfOa4jctlSVYFSNCCII9jUtwbia4e1eYEG88KoYSuWZeeWu0eldH4nwmziBF1ATybZh6MNfaqjxLsK6ycO4cfVbQ/MaH7q024ylVHDUt6fN1jP+n16B4qV843EiMuU2zWHicOuGwttFt9+RccJMAmFXmYhdSOWlY+1mLViy2+6YEwMqEXEywCM3MEjznlUPdwmIwrhmRrTKdDGk7aHY1lXjbm9bvXFV2t6/CFzHkTA1IOoqbaJBDm3AnXMm/PkM7RleEp+JBDmOHCXQMsm5ct3GIzOi3OLcGt2sPIJN60UF3XQFwxgDy2mo/iOAFu1YcEk3lJIPKDAitt+0Fy5ZvWsQTc7wLlMRlKtm5CSK9YvGYe7YtK3eLcs28ogCC2+pJmJqTDVbHFJveL6ekz0yuo1BRqSadrCJtcOv48I8c7ZL1h+GYU2Dfa7chCocKmxI5SdRPOseH4E1yxau2VLsxYXFkALlIiCdpHU1q4bHKuFvWSDmuFGUjYZTrOvSvP8A1AHC/q5Uk95nDToBGUiPvrvDUBsT+rXaOUTnvoFHjpECQP06f7cWUmYsNtSsvaTArZxL20EIIKiZ0Kg7nzmrTgrff4O0rSO8TKWAlFFp5AIzAAkDU+VU/inEDeZWYAFUC6fSjmfMzXzB2L1xcllbjg7qNR7x+dRfRc6k3iMERf7fz8lSZiGsrPDBLXTYW1nnbMclk47YRL7i1lyEyuVswy8tZ39etYsZjnui2rwe7GVSBuJ0B9NhVg4d2HutBvMLY6DxH7tvmat/C+AWMP8Au0lvrtq3z5e0Ut+LpUwAO8R/Wf8AadSwFeo4k9xp08ZyEeGX2VO4H2MuXIfETbT6v0m9uXvr5VfsDgrdlAlpQqjkPxPU+dbNKza2IfWPePgtjD4SlQHcF99fnIQlKUpKspSlKEJSlKEJSlKEJSlKEJSlKEJSlKEJSlKEJSlKEL5E71G4rgOGufHZSTzAyn5rBqTpXWuLTLTC45ocIcJHO6rN3sThTsHX0af9QNa57BWeVy57x/SrdSnDE1h+4qv/AMLD/wCg8oVQHYO1zuv91Z7XYjDD4s7erR+AFWilBxVY/vKBgsOP2DyUThezmFt/BZWeplv9RNSaIAIAAHQV7pSXOLjLjKexjWCGiOlvRKUpXFJKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhKUpQhf/9k=',
      type: 'alert',
      timestamp: '2023-09-25 3:30 PM',
      message: 'Vaccination Drive',
      severity: 'moderate',
      location: 'Kolkata',
      locationMapLink: 'https://maps.google.com/?q=22.5726,88.3639',
      source: 'Health Department',
      contact: {
        phoneNumber: '+91 9876543210',
        email: 'kolkata.health@example.com',
      },
    },
    // Add more alert objects here...
  ];
  

// Alert component
const Alert = ({ agencyName, agencyLogoLink, type, timestamp, message, severity, location, locationMapLink, source, contact }) => (
  <div className="rounded-lg bg-white shadow-md p-4 m-4 border border-gray-200">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={agencyLogoLink} alt={`${agencyName} Logo`} className="h-12 w-12 rounded-full object-cover mr-4" />
        <div>
          <div className="text-lg font-semibold text-gray-800">{agencyName}</div>
          <div className="text-sm text-gray-600">{timestamp}</div>
        </div>
      </div>
      <div className="text-sm text-gray-600">{severity.toUpperCase()}</div>
    </div>
    <div className="mt-2 text-gray-800">{message}</div>
    <div className="mt-4">
      <div className="text-gray-700">Location: {location}</div>
      <a
        href={locationMapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on Map
      </a>
    </div>
    <div className="mt-4 text-gray-700">Source: {source}</div>
    <div className="mt-4">
      <div className="text-gray-700">Contact:</div>
      <div>Phone: {contact.phoneNumber}</div>
      <div>Email: {contact.email}</div>
    </div>
  </div>
);

// AlertList component
const AlertList = () => (
  <div className="container mx-auto mt-8 px-4">
    <h1 className="text-3xl font-semibold mb-6">Alerts</h1>
    {alertsData.slice(0, 20).map((alert) => (
      <Alert key={alert.id} {...alert} />
    ))}
  </div>
);

export default AlertList;
