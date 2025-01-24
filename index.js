const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }

  const fileexplorer = (filename,level=0)=>{
    
    if(level ===0){
      console.log(filename.nom)
    }
    if(level === 1 ){
      console.log(filename.nom);
      return;
    }
  if(filename.contenu)
    for(const child of filename.contenu){
        fileexplorer(child,level +1)
    }
  }

  fileexplorer(dossierPrincipal)