


export function ImageBox({ selectedImg }){
    const active = selectedImg ? selectedImg : 'active'
    return  (<>
        <div className={`container`}>
        <div className={`grid-layout`}>
          <div className={`img-box ${selectedImg === 'cat1' ? 'active' : ''}  ${active} ${active === 'active' ? 'c-1' : ''}`}>
            <img
              loading='lazy'
              src={`/assets/cat1.jpeg`}
              className={`rounded img-fluid d-block  image`}
              alt={`image`}
            />
          </div>
          <div className={`img-box ${selectedImg === 'cat2' ? 'active' : '' } ${active} ${active === 'active' ? 'c-2' : ''}`}>
            <img
              loading='lazy'
              src={`/assets/cat2.jpeg`}
              className={`rounded img-fluid d-block image`}
              alt={`image`}
            />
          </div>
          <div className={`img-box ${selectedImg === 'cat3' ? 'active' : ''} ${active} ${active === 'active' ? 'c-3' : ''}`}>
            <img
              loading='lazy'
              src={`/assets/cat3.jpeg`}
              className={`rounded img-fluid d-block image`}
              alt={`image`}
            />
          </div>
          <div className={`img-box ${selectedImg === 'cat4' ? 'active' : ''} ${active} ${active === 'active' ? 'c-4' : ''}`}>
            <img
              loading='lazy'
              src={`/assets/cat4.jpeg`}
              className={`rounded img-fluid d-block image`}
              alt={`image`}
            />
          </div>
        </div>
      </div>
    </>)
}