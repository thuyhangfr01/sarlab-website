'use client';

import React from 'react';
import {
  Bolt,
  BookA,
  FileCode,
  FileSearch,
  FlaskConical,
  FlaskRound,
  ListTodo,
  MonitorDot,
  TestTubeDiagonal,
  UserRound,
} from 'lucide-react';

import Nav from './ui/nav';

const SideNavbar = () => (
  <div>
    <Nav
      menu={[
        {
          title: 'Thông tin chung',
          submenu: [
            {
              title: 'Cấu hình',
              icon: Bolt,
              variant: 'ghost',
              href: '',
              submenu2: [
                {
                  title: 'Banner trang chủ',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
              ],
            },
            {
              title: 'Nghiên cứu khoa học',
              icon: FileSearch,
              variant: 'ghost',
              href: '',
              submenu2: [
                {
                  title: 'Tạo đề tài',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
                {
                  title: 'Tạo bài viết',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
              ],
            },
            {
              title: 'Bài báo khoa học',
              icon: BookA,
              variant: 'ghost',
              href: '',
            },
            {
              title: 'Cán bộ',
              icon: UserRound,
              variant: 'ghost',
              href: '',
              submenu2: [
                {
                  title: 'Tạo loại chức vụ',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
                {
                  title: 'Tài khoản chức vụ',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
              ],
            },
            {
              title: 'Hóa chất dụng cụ',
              icon: FlaskRound,
              variant: 'ghost',
              href: '',
              submenu2: [
                {
                  title: 'Tạo chủ đề',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
                {
                  title: 'Tạo đặc tính',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
              ],
            },
          ],
        },
        {
          title: 'Thực hành hóa học',
          submenu: [
            {
              title: 'Giáo trình thực hành',
              icon: FileCode,
              variant: 'ghost',
              href: '',
              submenu2: [
                {
                  title: 'Tạo chủ đề cấp 1',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
                {
                  title: 'Tạo chủ đề cấp 2',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
                {
                  title: 'Đăng tải file',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
              ],
            },
            {
              title: 'Virtual Lab',
              icon: MonitorDot,
              variant: 'ghost',
              href: '',
            },
          ],
        },
        {
          title: 'Lớp thực hành',
          submenu: [
            {
              title: 'An toàn phòng thí nghiệm',
              icon: FlaskConical,
              variant: 'ghost',
              href: '',
              submenu2: [
                {
                  title: 'Tạo chủ đề bài kiểm tra',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
                {
                  title: 'Thi và nộp bài trắc nghiệm',
                  icon: FileSearch,
                  variant: 'ghost',
                  href: '',
                },
              ],
            },
            {
              title: 'Bài thực hành',
              icon: TestTubeDiagonal,
              variant: 'ghost',
              href: '',
            },
            {
              title: 'Điểm theo kỳ',
              icon: ListTodo,
              variant: 'ghost',
              href: '',
            },
          ],
        },
      ]}
    />
  </div>
);

export default SideNavbar;
