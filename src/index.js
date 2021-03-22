import 'core-js/stable'
import 'regenerator-runtime/runtime'

import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'



import '@/App'
import '@/assets/scss/index.scss'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
