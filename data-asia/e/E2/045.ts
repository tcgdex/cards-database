import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Espeon - 045/092",
         ja: "Espeon -045/092",
         fr: "Espeon - 045/092",
         de: "Espeon - 045/092",
         es: "Espeon - 045/092",
         it: "Espeon - 045/092",
         pt: "Espeon - 045/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [196],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Energy Return",
            ja: "エネルギーリターン",
            fr: "Retour d'énergie",
            de: "Energieertrag",
            es: "Retorno de energía",
            it: "Ritorno energetico",
            pt: "Retorno de energia",
          },
          effect: {
            en: "As often as you like during your turn <em>(before your attack)</em>, choose an Energy card attached to 1 of your Pokmon and return it to your hand. This power can't be used if Espeon is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前に）</em> </em>中に好きなように、ポクモンの1つに取り付けられたエネルギーカードを選択して、手に返します。 Espeonが特別な状態の影響を受けた場合、このパワーは使用できません。",
            fr: "Aussi souvent que vous le souhaitez à votre tour <em> (avant votre attaque) </em>, choisissez une carte d'énergie attachée à 1 de votre Pokmon et remettez-la à votre main. Ce pouvoir ne peut pas être utilisé si Espeon est affecté par une condition spéciale.",
            de: "Wählen Sie so oft, wie Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em> mögen, eine an 1 Ihres Pokmon angeschlossene Energiekarte und geben Sie sie an Ihre Hand zurück. Diese Leistung kann nicht angewendet werden, wenn Espeon von einem besonderen Zustand betroffen ist.",
            es: "Tan a menudo como desee durante su turno <em> (antes de su ataque) </em>, elija una tarjeta de energía unida a 1 de su Pokmon y devuélvala a su mano. Este poder no se puede usar si Espeon se ve afectado por una condición especial.",
            it: "Tutte le volte che vuoi durante il tuo turno <em> (prima del tuo attacco) </em>, scegli una carta di energia collegata a 1 del tuo Pokmon e restituila in mano. Questo potere non può essere utilizzato se Espeon è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno <em> (antes do seu ataque) </em>, escolha um cartão de energia conectado a 1 do seu Pokmon e devolva -o à sua mão. Esse poder não pode ser usado se Espeon for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Damage Blast",
            ja: "ダメージの爆発",
            fr: "Dommage",
            de: "Schadenserreger",
            es: "Explosión de daños",
            it: "Esplosione di danno",
            pt: "Danos Blast",
          },
          effect: {
            en: "Flip a number of coins equal to the number of damage counters on the Defending Pokemon. This attack does 30 damage plus 10 more damage for each heads.",
            ja: "防御ポケモンのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de compteurs de dégâts sur le Pokémon en défense. Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der Schadenszähler auf dem verteidigenden Pokémon entsprechen. Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de contadores de daño en el Pokémon defensor. Este ataque hace 30 daños más 10 daños más para cada cabezal.",
            it: "Capolare un numero di monete pari al numero di contatori di danno sul Pokemon in difesa. Questo attacco infligge 30 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de contadores de danos no Pokémon defensivo. Este ataque causa 30 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
