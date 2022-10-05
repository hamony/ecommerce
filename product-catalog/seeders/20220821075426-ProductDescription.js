'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [{
        name: 'Savory',
        price: '63.81',
        summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
        availability: false,
        image_path: '/img/product/product7.png',
        thumbnail_path: '/img/product/product-sm-3.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Zucchini - Green',
        price: '6.56',
        summary: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        description: '<p>Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.</p><p>Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo,sollicitudin ut, suscipit a, feugiat et, eros.</p><p>Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.</p><p>In congue. Etiam justo. Etiam pretium iaculis justo.</p>',
        availability: false,
        image_path: '/img/product/product8.png',
        thumbnail_path: '/img/product/product-sm-7.png',
        product_catalog_id: 4,
        review_count: 3,
        review_rating: 1.67
    },
    {
        name: 'Tart - Butter Plain Squares',
        price: '95.71',
        summary: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        description: '<p>Phasellus in felis. Donec semper sapien a libero. Nam dui.</p><p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.</p><p>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.</p>',
        availability: false,
        image_path: '/img/product/product1.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 2.33
    },
    {
        name: 'Doilies - 12, Paper',
        price: '89.46',
        summary: 'Fusce consequat. Nulla nisl. Nunc nisl.',
        description: '<p>Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.</p><p>Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.</p>',
        availability: false,
        image_path: '/img/product/product5.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 4,
        review_count: 3,
        review_rating: 1.67
    },
    {
        name: 'Trout - Hot Smkd, Dbl Fillet',
        price: '22.16',
        summary: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        description: '<p>Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.</p><p>Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.</p><p>Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.</p>',
        availability: true,
        image_path: '/img/product/product7.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 1,
        review_count: 3,
        review_rating: 3.67
    },
    {
        name: 'Ranchero - Primerba, Paste',
        price: '19.04',
        summary: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        description: '<p>Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.</p><p>Phasellus in felis. Donec semper sapien a libero. Nam dui.</p>',
        availability: false,
        image_path: '/img/product/product3.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 2,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Beef - Tenderloin',
        price: '51.31',
        summary: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        description: '<p>Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.</p><p>Sed ante. Vivamus tortor. Duis mattis egestas metus.</p><p>Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.</p><p>Quisque id justosit amet sapien dignissim vestibulum. Vestibulum ante ipsum primisin faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.</p>',
        availability: false,
        image_path: '/img/product/product5.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 6,
        review_count: 3,
        review_rating: 3.67
    },
    {
        name: 'Crab - Soft Shell',
        price: '12.53',
        summary: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        description: '<p>Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.</p><p>Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Etiamvel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.</p><p>Praesent id massa id nisl venenatis lacinia. Aenean sit ametjusto. Morbi ut odio.</p>',
        availability: false,
        image_path: '/img/product/product2.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Shiro Miso',
        price: '58.69',
        summary: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        description: '<p>Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.</p><p>Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Etiamvel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.</p>',
        availability: true,
        image_path: '/img/product/product4.png',
        thumbnail_path: '/img/product/product-sm-3.png',
        product_catalog_id: 5,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Wine - Segura Viudas Aria Brut',
        price: '94.89',
        summary: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        description: '<p>Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.</p><p>Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.</p><p>Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscinglorem, vitae mattis nibh ligula nec sem.</p><p>Duis aliquam convallisnunc. Proin at turpis a pede posuere nonummy. Integer non velit.</p>',
        availability: true,
        image_path: '/img/product/product1.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 2,
        review_count: 3,
        review_rating: 4
    },
    {
        name: 'Juice - Pineapple, 48 Oz',
        price: '24.48',
        summary: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        description: '<p>Phasellus in felis. Donec semper sapien a libero. Nam dui.</p><p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.</p><p>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.</p><p>Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>',
        availability: false,
        image_path: '/img/product/product6.png',
        thumbnail_path: '/img/product/product-sm-7.png',
        product_catalog_id: 4,
        review_count: 3,
        review_rating: 3.33
    },
    {
        name: 'Filling - Mince Meat',
        price: '51.1',
        summary: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p>',
        availability: true,
        image_path: '/img/product/product1.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 4,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Pears - Fiorelle',
        price: '19.25',
        summary: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        description: '<p>Vestibulum quam sapien, varius ut, blandit non, interdum in,ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.</p>',
        availability: true,
        image_path: '/img/product/product7.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 2,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Wine - Red, Black Opal Shiraz',
        price: '3.44',
        summary: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        description: '<p>Sed ante. Vivamus tortor. Duis mattis egestas metus.</p><p>Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.</p><p>Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.</p>',
        availability: true,
        image_path: '/img/product/product5.png',
        thumbnail_path: '/img/product/product-sm-7.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 3.33
    },
    {
        name: 'Pie Filling - Pumpkin',
        price: '67.51',
        summary: 'Fusce consequat. Nulla nisl. Nunc nisl.',
        description: '<p>Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.</p><p>Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.</p><p>Fusce consequat. Nulla nisl. Nunc nisl.</p>',
        availability: false,
        image_path: '/img/product/product8.png',
        thumbnail_path: '/img/product/product-sm-4.png',
        product_catalog_id: 1,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Cheese - Mozzarella, Buffalo',
        price: '73.99',
        summary: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        description: '<p>Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut,rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.</p>',
        availability: false,
        image_path: '/img/product/product5.png',
        thumbnail_path: '/img/product/product-sm-4.png',
        product_catalog_id: 2,
        review_count: 3,
        review_rating: 3.33
    },
    {
        name: 'Gatorade - Fruit Punch',
        price: '63.84',
        summary: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuerecubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        description: '<p>Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut,rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.</p><p>Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.</p><p>Pellentesque at nulla. Suspendisse potenti.Cras in purus eu magna vulputate luctus.</p>',
        availability: false,
        image_path: '/img/product/product4.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 3,
        review_count: 3,
        review_rating: 1.33
    },
    {
        name: 'Beef - Bones, Cut - Up',
        price: '59.66',
        summary: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        description: '<p>Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.</p><p>Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.</p><p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudinmi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.</p>',
        availability: false,
        image_path: '/img/product/product4.png',
        thumbnail_path: '/img/product/product-sm-6.png',
        product_catalog_id: 5,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Bread - Roll, Canadian Dinner',
        price: '14.01',
        summary: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        description: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.</p><p>Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.</p><p>Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.</p>',
        availability: false,
        image_path: '/img/product/product6.png',
        thumbnail_path: '/img/product/product-sm-3.png',
        product_catalog_id: 5,
        review_count: 3,
        review_rating: 4
    },
    {
        name: 'Milk - Condensed',
        price: '12.88',
        summary: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        description: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.</p><p>Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.</p><p>Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.</p><p>Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.</p><p>Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.</p>',
        availability: false,
        image_path: '/img/product/product7.png',
        thumbnail_path: '/img/product/product-sm-8.png',
        product_catalog_id: 4,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Beans - French',
        price: '89.23',
        summary: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        description: '<p>Maecenas leo odio, condimentum id, luctus nec, molestie sed,justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.</p><p>Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.</p><p>Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam nonmauris.</p>',
        availability: true,
        image_path: '/img/product/product5.png',
        thumbnail_path: '/img/product/product-sm-8.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 4.33
    },
    {
        name: 'Cheese - Goat With Herbs',
        price: '96.49',
        summary: 'Vestibulum quam sapien, varius ut, blandit non, interdum in,ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        description: '<p>Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.</p><p>Curabitur in libero ut massa volutpatconvallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.</p><p>Phasellus sit amet erat.Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.</p><p>Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque,quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.</p>',
        availability: true,
        image_path: '/img/product/product8.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 1,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Cheese - Manchego, Spanish',
        price: '71.52',
        summary: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        description: '<p>Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.</p>',
        availability: true,
        image_path: '/img/product/product4.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 5,
        review_count: 3,
        review_rating: 4.33
    },
    {
        name: 'Muffin Hinge Container 6',
        price: '89.75',
        summary: 'In hac habitasse platea dictumst. Morbi vestibulum, velit idpretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        description: '<p>Maecenas leo odio, condimentum id, luctus nec, molestie sed,justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.</p><p>Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.</p><p>Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam nonmauris.</p>',
        availability: true,
        image_path: '/img/product/product4.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 1,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Pepper - Gypsy Pepper',
        price: '89.63',
        summary: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p><p>In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.</p>',
        availability: true,
        image_path: '/img/product/product3.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 1,
        review_count: 3,
        review_rating: 2.67
    },
    {
        name: 'Muffin - Mix - Mango Sour Cherry',
        price: '7.79',
        summary: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        description: '<p>Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.</p><p>Phasellus in felis. Donec semper sapien a libero. Nam dui.</p><p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Utat dolor quis odio consequat varius.</p><p>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.</p><p>Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nullaelit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>',
        availability: false,
        image_path: '/img/product/product8.png',
        thumbnail_path: '/img/product/product-sm-4.png',
        product_catalog_id: 3,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Beer - Labatt Blue',
        price: '62.66',
        summary: 'In hac habitasse platea dictumst. Morbi vestibulum, velit idpretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        description: '<p>Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.</p><p>Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.</p><p>Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.</p>',
        availability: true,
        image_path: '/img/product/product4.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 5,
        review_count: 3,
        review_rating: 2.33
    },
    {
        name: 'Cheese - Blue',
        price: '74.04',
        summary: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        description: '<p>Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.</p><p>Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</p><p>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><p>Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapienin sapien iaculis congue. Vivamus metus arcu, adipiscing molestie,hendrerit at, vulputate vitae, nisl.</p><p>Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.</p>',
        availability: true,
        image_path: '/img/product/product1.png',
        thumbnail_path: '/img/product/product-sm-3.png',
        product_catalog_id: 1,
        review_count: 3,
        review_rating: 3
    },
    {
        name: 'Chick Peas - Canned',
        price: '74.13',
        summary: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        description: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.</p><p>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.</p><p>Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>',
        availability: false,
        image_path: '/img/product/product1.png',
        thumbnail_path: '/img/product/product-sm-6.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 3.33
    },
    {
        name: 'Apple - Northern Spy',
        price: '48.54',
        summary: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        description: '<p>Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.</p>',
        availability: true,
        image_path: '/img/product/product2.png',
        thumbnail_path: '/img/product/product-sm-5.png',
        product_catalog_id: 7,
        review_count: 3,
        review_rating: 3.33
    },
    {
        name: 'Versatainer Nc - 8288',
        price: '15.6',
        summary: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        description: '<p>Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.</p><p>Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.</p>',
        availability: true,
        image_path: '/img/product/product5.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 6,
        review_count: 2,
        review_rating: 5
    },
    {
        name: 'Capers - Ox Eye Daisy',
        price: '34.68',
        summary: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate,justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        description: '<p>Pellentesque at nulla. Suspendisse potenti. Cras in purus eumagna vulputate luctus.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
        availability: true,
        image_path: '/img/product/product1.png',
        thumbnail_path: '/img/product/product-sm-1.png',
        product_catalog_id: 1,
        review_count: 2,
        review_rating: 4
    },
    {
        name: 'Toamtoes 6x7 Select',
        price: '73.74',
        summary: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        description: '<p>Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.</p>',
        availability: false,
        image_path: '/img/product/product3.png',
        thumbnail_path: '/img/product/product-sm-2.png',
        product_catalog_id: 7,
        review_count: 2,
        review_rating: 3
    },
    {
        name: 'Pork - Back Ribs',
        price: '35.66',
        summary: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        description: '<p>Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuerecubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.</p><p>Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.</p><p>In congue. Etiam justo. Etiam pretium iaculis justo.</p><p>In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.</p>',
        availability: true,
        image_path: '/img/product/product7.png',
        thumbnail_path: '/img/product/product-sm-8.png',
        product_catalog_id: 2,
        review_count: 2,
        review_rating: 2.5
    },
    {
        name: 'Beer - True North Lager',
        price: '42.66',
        summary: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed,justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        description: '<p>Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.</p><p>Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.</p><p>Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.</p><p>Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placera</p>',
        availability: false,
        image_path: '/img/product/product3.png',
        thumbnail_path: '/img/product/product-sm-2.png',
        product_catalog_id: 7,
        review_count: 2,
        review_rating: 4
    }
  ];
  
  await queryInterface.bulkInsert('ProductDescriptions', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductDescriptions', null, {});
  }
};
