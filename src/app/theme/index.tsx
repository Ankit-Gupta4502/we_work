"use client"
import React from 'react'
import { ConfigProvider } from 'antd'
const Index = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00B686",
          colorTextSecondary: "#657372"
        },
        components: {
          Button: {
            paddingContentVertical: 6,
            paddingContentHorizontal: 24,
            controlHeight: 38,
          },
          Typography: {
            colorSuccess: "#00B686"
          }
        }

      }}
    >
      {children}

    </ConfigProvider>
  )
}

export default Index