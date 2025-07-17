import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Bellsprout (Lv.13)",
         ja: "エリカのベルスプラウト（lv.13）",
         fr: "Bellsprout d'Erika (LV.13)",
         de: "Erikas Bellsprout (lv.13)",
         es: "BellSprout de Erika (LV.13)",
         it: "BellsProut di Erika (LV.13)",
         pt: "Bellsprout de Erika (LV.13)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [69],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Soak Up",
            ja: "浸る",
            fr: "Absorber",
            de: "Genießen",
            es: "Absorber",
            it: "Immergiti",
            pt: "Absorver",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may take up to 2 Grass Energy cards attached to your other Pokmon and attach them to Erika's Bellsprout. This power can't be used if Erika's Bellsprout is Asleep, Confused, or Paralyzed.",
            ja: "ターン中（攻撃の前）</em> </em>、他のPokmonに最大2匹の草エネルギーカードを取り付けて、エリカのベルスプラウトに取り付けることができます。エリカのベルスプラウトが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez prendre jusqu'à 2 cartes d'énergie de l'herbe attachées à votre autre Pokmon et les attacher à Bellsprout d'Erika. Ce pouvoir ne peut pas être utilisé si Bellsprout d'Erika est endormi, confus ou paralysé.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie bis zu 2 Grasergiekarten, die an Ihrem anderen Pokmon befestigt sind, einnehmen und an Erikas Bellsprout befestigen. Diese Kraft kann nicht verwendet werden, wenn Erikas Bellsprout schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede tomar hasta 2 cartas de energía de césped unidas a su otro Pokmon y adjuntarlas a Bellsprout de Erika. Este poder no se puede usar si BellSprout de Erika está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi prendere fino a 2 carte di energia dell'erba attaccate agli altri pokmon e attaccarle al Bellsprout di Erika. Questo potere non può essere usato se Bellsprout di Erika è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode levar até 2 cartões de energia de grama presos ao seu outro Pokmon e anexá -los ao Bellsprout de Erika. Esse poder não pode ser usado se o Bellsprout de Erika estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Stretch Vine",
            ja: "ブドウをストレッチします",
            fr: "Vigne étirée",
            de: "Rebe Stretch",
            es: "Enredadera",
            it: "Vine in tratto",
            pt: "Estrear a videira",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon, and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire, et cette attaque lui fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners, und dieser Angriff schädigt es 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente, y este ataque le hace 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon bancado do seu oponente, e esse ataque causa 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
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
