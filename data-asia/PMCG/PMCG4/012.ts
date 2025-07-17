import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Charmander",
         ja: "チャーマンダー",
         fr: "Charmander",
         de: "Charmander",
         es: "Encanto",
         it: "Charmander",
         pt: "Charmander",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [4],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Gather Fire",
            ja: "火を集めます",
            fr: "Se retirer du feu",
            de: "Feuer sammeln",
            es: "Recoger fuego",
            it: "Raccogli il fuoco",
            pt: "Reunir fogo",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may take 1 Fire Energy card attached to 1 of your other Pokmon and attach it to Charmander. This power can't be used if Charmander is Asleep, Confused, or Paralyzed.",
            ja: "順番<em>（攻撃の前）</em> </em>、1つのFire Energyカードを他のPokmon 1つに取り付けて、Charmanderに添付することができます。 Charmanderが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez prendre 1 carte d'énergie de feu attachée à 1 de votre autre Pokmon et la fixer à Charmander. Ce pouvoir ne peut pas être utilisé si Charmander est endormi, confus ou paralysé.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie 1 Brandenergiekarte an 1 Ihrer anderen Pokmon mitnehmen und an Charmander befestigen. Diese Macht kann nicht verwendet werden, wenn Charmander schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede tomar 1 tarjeta de energía de fuego unida a 1 de su otro Pokmon y adjuntarlo a Charmander. Este poder no se puede usar si Charmander está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi prendere 1 carta di energia antincendio attaccata a 1 degli altri pokmon e attaccarlo a Charmander. Questo potere non può essere usato se Charmander dorme, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode levar 1 cartão de energia de incêndio conectado a 1 do seu outro Pokmon e anexá -lo à Charmander. Esse poder não pode ser usado se Charmander estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Fire Tail",
            ja: "火の尾",
            fr: "Queue de feu",
            de: "Feuerschwanz",
            es: "Cola de fuego",
            it: "Coda di fuoco",
            pt: "Cauda de fogo",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
