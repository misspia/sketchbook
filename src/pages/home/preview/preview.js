import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './preview.styles'
import Icon from '../../../components/icon';
import { Icons, Colors } from '../../../themes';

export default function Preview({
  to = '',
  title = '',
  image = '',
  isAudio = false,
  onLoad = () => {},

}) {
    return (
      <S.Container>
        <S.Image 
          src={image} 
          onLoad={onLoad}
        />
        <NavLink to={to} />
        <S.HiddenContainer>

        </S.HiddenContainer>
        {
          isAudio && 
          <S.IconWrapper>
            <Icon
              size='1.5em'
              color={Colors.grey}
              name={Icons.audio}/> 
          </S.IconWrapper>          
        }
        
      </S.Container>
    );
}
