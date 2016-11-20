原教學文來自於APPCODA的這篇文章：
http://www.appcoda.com.tw/react-native-introduction/   

修改了教學文中的幾的小bug:   

1. Component現在由'react' import進來。
2. ActivityIndicatorIOS改名為ActivityIndicator。
3. 原教學的BookList會有Navigator蓋到讀取出來的書單的問題   
	解決方式：在listView的style中加入   
	`paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight`
4. SearchBooks.js中的searchInput style，flex: 1要拿掉。
