import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops",
         ja: "カブトップス",
         fr: "Kabutops",
         de: "Kabutops",
         es: "Kabutops",
         it: "Kabutops",
         pt: "Kabutops",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Ancient Shell",
            ja: "古代の殻",
            fr: "Coquille ancienne",
            de: "Alte Hülle",
            es: "Concha antigua",
            it: "Antico guscio",
            pt: "Concha antiga",
          },
          effect: {
            en: "As long as you have Omanyte or Omastar in play, damage done to Kabutops by attacks is reduced by 20 (after applying Weakness and Resistance).",
            ja: "OmanyteまたはOmastarがプレイされている限り、攻撃によってKabutopsに与えられた損害は20増加します（脱力感と抵抗を適用した後）。",
            fr: "Tant que vous avez Omanyte ou Omastar en jeu, les dégâts causés aux kabutops par les attaques sont réduits de 20 (après avoir appliqué la faiblesse et la résistance).",
            de: "Solange Sie Omanyte oder Omastar im Spiel haben, werden Schäden an Kabutops durch Angriffe um 20 verringert (nach Auftragen von Schwäche und Widerstand).",
            es: "Mientras tenga Omanyte u OmaStar en juego, 20 se reduce el daño causado a Kabutops por ataques (después de aplicar debilidad y resistencia).",
            it: "Finché hai in gioco Omanyte o Omastar, il danno fatto a Kabutops dagli attacchi è ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Enquanto você tiver Omanyte ou Omastar em jogo, os danos causados ao Kabutops por ataques são reduzidos em 20 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Energy Stream",
            ja: "エネルギーストリーム",
            fr: "Flux d'énergie",
            de: "Energiestrom",
            es: "Corriente de energía",
            it: "Flusso di energia",
            pt: "Fluxo de energia",
          },
          effect: {
            en: "Search your discard pile for a basic Energy card and attach it to Kabutops.",
            ja: "廃棄の山を検索して、基本的なエネルギーカードを調べ、カブトップに添付してください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie de base et attachez-la à Kabutops.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach einer grundlegenden Energiekarte und befestigen Sie sie an Kabutops.",
            es: "Busque en su pila de descarte una tarjeta de energía básica y adjunte a Kabutops.",
            it: "Cerca al tuo mucchio di scarti una scheda di energia di base e attaccalo a Kabutops.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia básico e anexe -o a Kabutops.",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Extra Claws",
            ja: "余分な爪",
            fr: "Griffes supplémentaires",
            de: "Zusätzliche Krallen",
            es: "Garras adicionales",
            it: "Claws extra",
            pt: "Garras extras",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 50 damage plus 30 more damage.",
            ja: "防御ポケモンがポケモン-Exの場合、この攻撃は50のダメージと30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 50 Schäden plus 30 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 50 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 50 danni più 30 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 50 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
