import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Mewtwo (Delta Species)",
         ja: "mewtwo（デルタ種）",
         fr: "Mewtwo (espèces delta)",
         de: "Mewtwo (Delta -Arten)",
         es: "Mewtwo (especie delta)",
         it: "Mewtwo (Delta Species)",
         pt: "Mewtwo (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [150],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Delta Switch",
            ja: "デルタスイッチ",
            fr: "Interrupteur delta",
            de: "Delta -Schalter",
            es: "Interruptor delta",
            it: "Interruttore delta",
            pt: "Delta Switch",
          },
          effect: {
            en: "Once during your turn, when you put Mewtwo from your hand onto your Bench, you may move any number of basic Energy cards attached to your PokÃ©mon to your other PokÃ©mon (excluding Mewtwo) in any way you like.",
            ja: "ターン中に、手からMewtwoをベンチに置くと、Pokã©Monに取り付けられた基本エネルギーカードを他のPokã©Mon（Mewtwoを除く）に任意の方法で移動できます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Mewtwo de votre main sur votre banc, vous pouvez déplacer n'importe quel nombre de cartes d'énergie de base attachées à votre poké à votre autre Pokã © Mon (à l'exclusion de Mewtwo) de quelque manière que ce soit.",
            de: "Sobald Sie während Ihres Zuges Mewtwo von Ihrer Hand auf Ihre Bank legen, können Sie eine beliebige Anzahl von grundlegenden Energiekarten, die an Ihren Pokémon angehängt sind, zu Ihrem anderen Poké Mon (ohne Mewtwo) in irgendeiner Weise, wie Sie möchten, verlagern.",
            es: "Una vez durante su turno, cuando ponga a Mewtwo de su mano a su banco, puede mover cualquier cantidad de tarjetas de energía básicas unidas a su Poké Mon a su otro Poké Mon (excluyendo Mewtwo) de cualquier manera que desee.",
            it: "Una volta durante il tuo turno, quando metti Mewtwo dalla tua mano sulla panchina, puoi spostare un numero qualsiasi di carte di energia di base collegate al tuo poké mon al tuo altro poké mon (escluso Mewtwo) in qualsiasi modo che preferisca.",
            pt: "Uma vez durante o seu turno, quando você coloca mewtwo da sua mão em seu banco, poderá mover qualquer número de cartões de energia básicos anexados ao seu Poké Mon para o seu outro Poké Mon (excluindo Mewtwo) da maneira que desejar.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Metal"],
          name: {
            en: "Energy Burst",
            ja: "エネルギーバースト",
            fr: "Éclatement d'énergie",
            de: "Energieausbruch",
            es: "Estallido de energía",
            it: "Scoppio di energia",
            pt: "Explosão de energia",
          },
          effect: {
            en: "Does 10 damage times the total amount of Energy attached to Mewtwo and the Defending Pokemon.",
            ja: "Mewtwoと防御ポケモンに付随するエネルギーの総量を10回ダメージします。",
            fr: "Fait 10 dégâts de temps la quantité totale d'énergie attachée à Mewtwo et au Pokémon en défense.",
            de: "Hat 10 Schadenszeiten die Gesamtmenge an Energie, die an Mewtwo und das verteidigende Pokemon verbunden ist.",
            es: "Hace 10 tiempos de daño la cantidad total de energía unida a Mewtwo y al Pokémon defensor.",
            it: "Fa 10 danni volte la quantità totale di energia collegata a mewtwo e il Pokemon in difesa.",
            pt: "10 danos vezes a quantidade total de energia ligada a Mewtwo e o Pokémon defensor.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
