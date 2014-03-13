__author__ = 'Michael'

import urllib2
from urllib import urlretrieve
import os

outputFolder = '/Users/Michael/Projects/NickSite/'
rootPage = urllib2.urlopen( "http://redkeyphotography.com/advertising.html").read()

##
# find '<ul id="facciones">', read to </ul>
index = rootPage.find('<ul class="thumbs noscript">')
end = rootPage.find('</ul>', index)

imgList = rootPage[index:end]

i = 0
index = imgList.find('<li')
while index != -1:

    end = imgList.find('</li>', index)
    img = imgList[index:end]
    index = imgList.find('<li', end)

    i = img.find('href=')+6
    j = img.find('">', i)
    fullImage = img[i:j]

    i = img.find('<img src="')+10
    j = img.find('"', i)
    thumbnail = img[i:j]

    print thumbnail + ": " + fullImage

    outFolder = outputFolder + 'Advertising'
    if not os.path.exists(outFolder):
        os.makedirs(outFolder)

    fileName = outFolder + '/' + thumbnail[thumbnail.rfind('/')+1:]
    urlretrieve("http://redkeyphotography.com/" + thumbnail, fileName)

    fileName = outFolder + '/' + fullImage[fullImage.rfind('/')+1:]
    urlretrieve("http://redkeyphotography.com/" + fullImage, fileName)