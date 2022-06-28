import React from 'react'
import * as S from './styles'
import Starfull from '../../assets/star.svg'
import StarHalg from '../../assets/star_half.svg'
import Starempty from '../../assets/star_empty.svg'
export default function Stars(props) {
    const s = [0, 0, 0, 0, 0]
    let floor = Math.floor(props.stars)
    let left = floor
    for (var i = 0; i < floor; i++) {
        s[i] = 2
    }
    if (left > 0) {
        s[i] = 1
    }
    return (
        <S.Container>
            {s.map((i, k) => {
                return (
                    <S.StarView key={k}>
                        {i === 0 && <Starempty width="18" height="18" fill="#FF9200" />}
                        {i === 1 && <StarHalg width="18" height="18" fill="#FF9200" />}
                        {i === 2 && <Starfull width="18" height="18" fill="#FF9200" />}
                    </S.StarView>
                )
            })}

            {props?.showNumber && <S.TextShow>{props?.stars}</S.TextShow>}
        </S.Container>
    )
}