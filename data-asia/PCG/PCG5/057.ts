import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Anorith",
         ja: "アノリス",
         fr: "Anorith",
         de: "Anorith",
         es: "Anorito",
         it: "Anorito",
         pt: "Anorith",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [347],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Influence",
            ja: "影響",
            fr: "Influence",
            de: "Beeinflussen",
            es: "Influencia",
            it: "Influenza",
            pt: "Influência",
          },
          effect: {
            en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokemon as Basic Pokemon.",
            ja: "オマニテ、カブト、アエロダクチル、リリープ、またはアノリスをデッキで検索し、そのうちの2つをベンチに入れます。その後、デッキをシャッフルします。新しいベンチポケモンを基本的なポケモンとして扱います。",
            fr: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Mélanger votre deck par la suite. Traitez le nouveau Pokémon bancné comme un pokemon de base.",
            de: "Suchen Sie Ihr Deck nach Omanyte, Kabuto, Aerodactyl, Lileep oder Anorith und legen Sie bis zu 2 davon auf Ihre Bank. Mischen Sie anschließend Ihr Deck. Behandle das neue Bankpokémon als Basic -Pokemon.",
            es: "Busque en su mazo para Omanyte, Kabuto, Aerodactyl, Lileep o Anorith y coloque hasta 2 de ellos en su banco. Baraja tu mazo después. Trate al nuevo Pokémon de banca como Pokémon básico.",
            it: "Cerca nel tuo mazzo Omanyte, Kabuto, Aerodactyl, Lileep o Anorith e mettiti fino a 2 di loro sulla panchina. Shuffle il tuo mazzo in seguito. Tratta il nuovo Pokemon in panchina come Pokemon di base.",
            pt: "Procure seu baralho para Omanyte, Kabuto, Aerodactyl, Lileep ou Anorith e coloque até 2 deles em seu banco. Afaste seu baralho depois. Trate o novo Pokémon em banco como Pokémon básico.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Stretch Claws",
            ja: "爪を伸ばします",
            fr: "Griffes d'étirement",
            de: "Krallen strecken",
            es: "Estirar garras",
            it: "Artigli allungati",
            pt: "Garras esticadas",
          },
          effect: {
            en: "If Anorith has any React Energy cards attached to it, this attack does 20 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Anorithに反応エネルギーカードが付属している場合、この攻撃は対戦相手のベンチ付きポケモンの1つに20ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si Anorith a des cartes d'énergie React qui lui sont attachées, cette attaque fait 20 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Anorith reagiert werden, hat dieser Angriff 20 Schäden an 1 der Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si Anorith tiene alguna tarjetas de energía reaccionadas adjuntas, este ataque hace 20 daños a 1 de los Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se Anorith ha delle carte di energia React ad esso collegate, questo attacco fa 20 danni a 1 dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o Anorith tiver algum cartão de energia do React anexado a ele, esse ataque causará 20 danos a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
