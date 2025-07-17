import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Unown I",
         ja: "未作外",
         fr: "Non-bas",
         de: "Unown i",
         es: "Uno",
         it: "Nonwn i",
         pt: "Unown i",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "INCREASE [Increase]",
            ja: "増加[増加]",
            fr: "Augmenter [augmentation]",
            de: "Erhöhung [Erhöhung]",
            es: "Aumento [Aumento]",
            it: "Aumenta [Aumenta]",
            pt: "Aumentar [aumentar]",
          },
          effect: {
            en: "When you play Unown [I] from your hand, you may search your deck for a card with Unown in its name and put it onto your Bench. Shuffle your deck afterward. You can't use this power if your Bench is full.",
            ja: "手から[i]を使用していない場合は、名前が付けられていないカードを検索して、ベンチに置くことができます。その後、デッキをシャッフルします。ベンチがいっぱいになった場合、このパワーを使用することはできません。",
            fr: "Lorsque vous jouez non à votre main, vous pouvez rechercher votre jeu une carte avec non-bas en son nom et la mettre sur votre banc. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser cette puissance si votre banc est plein.",
            de: "Wenn Sie unown [i] von Ihrer Hand spielen, können Sie Ihr Deck nach einer Karte mit Unown im Namen suchen und auf Ihre Bank legen. Mischen Sie anschließend Ihr Deck. Sie können diese Leistung nicht anwenden, wenn Ihre Bank voll ist.",
            es: "Cuando juegas a Unwown [i] de tu mano, puedes buscar en tu mazo una carta con su nombre y ponerla en tu banco. Baraja tu mazo después. No puede usar este poder si su banco está lleno.",
            it: "Quando giochi Unown [i] dalla tua mano, puoi cercare nel tuo mazzo una carta con Unown nel suo nome e metterla in panchina. Shuffle il tuo mazzo in seguito. Non puoi usare questa potenza se la tua panchina è piena.",
            pt: "Quando você toca unnown [i] da sua mão, você pode pesquisar um cartão com uma carta com o UNOWN em seu nome e colocá -lo em seu banco. Afaste seu baralho depois. Você não pode usar esse poder se o seu banco estiver cheio.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
