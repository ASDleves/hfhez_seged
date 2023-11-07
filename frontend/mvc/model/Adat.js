export const urlapleiro ={
    nev:{
        megj:"Név",
        type:"text",
        placeholder:"Valaki vagyok",
        value:"",
        regex:"[A-Z][a-z]{2,15}",
        valid:"Nagybetűvel kezdődik, legalább 3 betű legyen!"

    },
    szul:{
        megj:"Születési idő",
        type:"number",
        placeholder:"2000",
        value:"",
        regex:{
            min:1000,
            max:2023
        },
        valid:"1000 és 2023 közötti számot irj!"
    },
    neme: {
        megj: "Nem",
        type: "select",
        options: [
            { label: "", value: "" },
            { label: "Nő", value: "no" },
            { label: "Férfi", value: "ferfi" }
        ],
        valid: "Kérlek, válassz egy nemet!"
        },
        allat: {
            megj: "Kedvenc állat",
            type: "radio",
            name: "animal",
            options: [
              { label: "Kutya", value: "kutya" },
              { label: "Macsk", value: "macska" },
              { label: "Mókus", value: "mokus" },
              { label: "Tigris", value: "tigris" },
              { label: "Panda", value: "panda" },
              { label: "Zebra", value: "zebra" },
              { label: "Ló", value: "lo" },
              { label: "Delfin", value: "delfin" },
              { label: "Sündisznó", value: "sundiszno" },
              { label: "Papagáj", value: "papagaj" }
            ],
            valid: "Kérlek, válassz egy állatot!"
          }
    }
