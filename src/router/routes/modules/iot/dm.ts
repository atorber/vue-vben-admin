import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dm: AppRouteModule = {
  path: '/dm',
  name: 'DM',
  component: LAYOUT,
  redirect: '/dm/product',
  meta: {
    orderNo: 1,
    icon: 'ant-design:codepen-outlined',
    title: '设备管理',
  },
  children: [
    {
      path: 'product',
      name: 'Product',
      component: () => import('/@/views/iot/dm/Product.vue'),
      meta: {
        // affix: true,
        title: '产品',
      },
    },
    {
      path: 'device',
      name: 'Device',
      component: () => import('/@/views/iot/dm/Device.vue'),
      meta: {
        title: '设备',
      },
    },
    {
      path: 'group',
      name: 'Group',
      component: () => import('/@/views/iot/dm/Group.vue'),
      meta: {
        title: '分组',
      },
    },
  ],
};

export default dm;
