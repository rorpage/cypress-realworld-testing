import { LessonTableOfContents, Lesson } from "../../../types/common"
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css"

type Props = {
  navigation: LessonTableOfContents[]
  lessons: Lesson[]
}

const isCurrentPage = (lessonPath) => {
  return window.location.pathname === lessonPath
}

export default function LessonSidebar({ navigation, lessons }: Props) {
  return (
    <div data-test="sidebar">
      <ProSidebar>
        <Menu>
          {lessons.map((lesson, index) => (
            <div key={index}>
              {!isCurrentPage(`/tutorials/${lesson.slug}`) && (
                <MenuItem>
                  <a
                    data-test={`real-world-lesson-${index}`}
                    href={`/tutorials/${lesson.slug}`}
                  >
                    {lesson.title}
                  </a>
                </MenuItem>
              )}

              {isCurrentPage(`/tutorials/${lesson.slug}`) && (
                <SubMenu title={lesson.title} defaultOpen={true}>
                  {navigation.map((item) => (
                    <MenuItem key={item.slug}>
                      <a
                        data-test="sidebar-submenu-toc-link"
                        href={`#${item.slug}`}
                      >
                        {item.content}
                      </a>
                    </MenuItem>
                  ))}
                </SubMenu>
              )}
            </div>
          ))}
        </Menu>
      </ProSidebar>
    </div>
  )
}
