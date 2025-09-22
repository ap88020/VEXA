import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import RemoveBackGround from './pages/RemoveBackGround'
import ReviewResume from './pages/ReviewResume'
import GenerateImages from './pages/GenerateImages'
import BlogTitle from './pages/BlogTitle'
import RemoveObject from './pages/RemoveObject'
import Community from './pages/Community'

const App = () => {
  return (
    <div>
      <Routes>
        < Route path='/' element={< Home />} />
        <Route path='/ai' element={< Layout />}>
          < Route index element={< Dashboard />} />
          < Route path='write-article' element={< WriteArticle />} />
          < Route path='remove-background' element={< RemoveBackGround />} />
          < Route path='remove-object' element={< RemoveObject />} />
          < Route path='review-resume' element={< ReviewResume />} />
          < Route path='generate-images' element={< GenerateImages />} />
          < Route path='blog-title' element={< BlogTitle />} />
          < Route path='community' element={< Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App  