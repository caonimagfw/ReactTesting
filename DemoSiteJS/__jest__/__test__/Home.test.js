import 'jsdom-global/register';
import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import HeaderComp from '../../src/pages/common/Header'
import HomeComp from '../../src/pages/Home'

Enzyme.configure({
    adapter: new Adapter()
});

describe('1. Hello Testing ', () => {
    it('1) test 1 == 1', () => {
        expect(1).toEqual(1);
    });

    it('2) Test Header: find div#dHeader ', () => {
        const wrapper = shallow(<HeaderComp />);

        expect(wrapper.find("div#dHeader").length).toEqual(1);
    });

    it('3) Test Home Page: find div#dHeader ', () => {
        const wrapper = mount(
            <HomeComp />
        );

        expect(wrapper.find("div#dHeader").length).toEqual(1);
    });

    it('4) Test Home Page: find header comp ', () => {
        const wrapper = mount(
            <HomeComp />
        );
        console.log(wrapper.find(HeaderComp).length);
        expect(wrapper.find(HeaderComp).length).toEqual(1);
    });

});
