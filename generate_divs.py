__author__ = 'Michael'

import os

print 'Start'
for dirname, dirnames, filenames in os.walk('.'):
    # print path to all subdirectories first.
    #for subdirname in dirnames:
    #    print os.path.join(dirname, subdirname)



    for filename in filenames:
        if "Commercial" in filename or "Event" in filename or "Food" in filename or "People" in filename or "Places" in filename:
        # print path to all filenames.
            print """<div class="hidden thumbnail" style="background-color: white; background-image: url('""" + dirname.replace('./', '') + "/" + filename + """'); background-size: 75px 75px;" data-img-path='""" + dirname.replace('./', '') + "/" + filename + """' data-parent='""" + dirname.replace('./', '') + """'></div>"""

    # Advanced usage:
    # editing the 'dirnames' list will stop os.walk() from recursing into there.
    if '.git' in dirnames:
        # don't go into any .git directories.
        dirnames.remove('.git')