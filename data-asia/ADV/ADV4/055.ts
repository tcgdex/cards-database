import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Regirock ex",
         ja: "Regirock Ex",
         fr: "Regirock ex",
         de: "Regirock Ex",
         es: "Regirock ex",
         it: "Regirock Ex",
         pt: "Regirock Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [377],
      hp: 100,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Healing Stone",
            ja: "癒しの石",
            fr: "Pierre de guérison",
            de: "Heilstein",
            es: "Piedra curativa",
            it: "Pietra di guarigione",
            pt: "Pedra de cura",
          },
          effect: {
            en: "At any time between turns, remove 1 damage counter from Regirock ex.",
            ja: "ターンの間にいつでも、Regirock Exから1つのダメージカウンターを取り外します。",
            fr: "À tout moment entre les virages, retirer 1 compteur de dégâts de Regirock Ex.",
            de: "Entfernen Sie jederzeit zwischen den Kurven 1 Schadenschalter von Regirock EX.",
            es: "En cualquier momento entre turnos, elimine 1 contador de daños de Regirock Ex.",
            it: "In qualsiasi momento tra i turni, rimuovere 1 contatore di danni da Regirock Ex.",
            pt: "A qualquer momento entre as voltas, remova 1 contador de danos do Regirock Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Tonnage",
            ja: "トン数",
            fr: "Tonnage",
            de: "Tonnage",
            es: "Tonelaje",
            it: "Tonnellaggio",
            pt: "Tonelagem",
          },
          effect: {
            en: "You may do 60 damage plus 20 more damage. If you do, Regirock ex does 30 damage to itself.",
            ja: "60ダメージに加えて20ダメージを与えます。もしそうなら、Regirock Exはそれ自体に30のダメージを与えます。",
            fr: "Vous pouvez faire 60 dégâts plus 20 dégâts supplémentaires. Si vous le faites, Regirock Ex se fait 30 dégâts.",
            de: "Sie können 60 Schäden plus 20 weitere Schäden anrichten. Wenn Sie dies tun, verursacht Regirock EX 30 Schäden an sich.",
            es: "Puede causar 60 daños más 20 más de daño. Si lo hace, Regirock Ex hace 30 daños a sí mismo.",
            it: "Puoi fare 60 danni più 20 danni in più. Se lo fai, Regirock Ex fa 30 danni a se stesso.",
            pt: "Você pode causar 60 danos mais 20 mais danos. Se o fizer, o Regirock EX causa 30 danos a si mesmo.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
