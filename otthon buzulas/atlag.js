function sumArray(array) {
    let jegyekOsszege = 0;
  
    for (let i = 0; i < jegyek.length; i += 1) {
      jegyekOsszege += jegyek[i];
    }
    
    return jegyekOsszege;
  }
  const jegyek = [2, 5, 3, 1, 2];
  const jegyekOsszege = sumArray(jegyek);
  const atlag = jegyekOsszege / jegyek.length;
  console.warn(atlag);