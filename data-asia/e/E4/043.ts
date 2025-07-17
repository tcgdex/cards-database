import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Alakazam - 043/088",
         ja: "アラカザム-043/088",
         fr: "Alakazam - 043/088",
         de: "Alakazam - 043/088",
         es: "Alakazam - 043/088",
         it: "Alakazam - 043/088",
         pt: "Alakazam - 043/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [65],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Energy Jump",
            ja: "エネルギージャンプ",
            fr: "Saut d'énergie",
            de: "Energiesprung",
            es: "Salto de energía",
            it: "Salto di energia",
            pt: "Salto de energia",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may move an Energy card from 1 of your Pokmon to another of your Pokmon. This power can't be used if Alakazam is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em> </em>、エネルギーカードを1枚からポクモンの別のものに移動できます。アラカザムが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez déplacer une carte d'énergie de 1 de votre pokmon à un autre de votre pokmon. Ce pouvoir ne peut pas être utilisé si Alakazam est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie eine Energiekarte von 1 Ihres Pokmons auf ein anderes Ihres Pokmons verschieben. Diese Kraft kann nicht angewendet werden, wenn Alakazam von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede mover una tarjeta de energía de 1 de su Pokmon a otro de su Pokmon. Este poder no se puede usar si Alakazam se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi spostare una carta energetica da 1 del tuo Pokmon a un'altra del tuo Pokmon. Questo potere non può essere usato se Alakazam è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode mover um cartão de energia de 1 do seu Pokmon para outro de seu Pokmon. Esse poder não pode ser usado se Alakazam for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Psychic",
            ja: "サイキック",
            fr: "Psychique",
            de: "Psychisch",
            es: "Psíquico",
            it: "Psichico",
            pt: "Psíquico",
          },
          effect: {
            en: "This attack does 30 damage plus 10 more damage for each Energy card attached to the Defending Pokemon.",
            ja: "この攻撃は、防御ポケモンに取り付けられた各エネルギーカードに対して30のダメージと10のダメージをさらに10件以上与えます。",
            fr: "Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque carte d'énergie attachée au Pokémon en défense.",
            de: "Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Este ataque hace 30 daños más 10 daños más por cada carta de energía unida al Pokémon defensor.",
            it: "Questo attacco infligge 30 danni più 10 danni in più per ogni carta di energia collegata al Pokemon in carica.",
            pt: "Este ataque causa 30 danos mais 10 mais danos para cada cartão de energia ligado ao pokemon defensor.",
          },
        },
      ],

      retreat: 2,

};
