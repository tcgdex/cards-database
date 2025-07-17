import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Hypno",
         ja: "催眠",
         fr: "Hypno",
         de: "Hypno",
         es: "Hipno",
         it: "Ipno",
         pt: "Hypno",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [97],
      hp: 90,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Prophecy",
            ja: "預言",
            fr: "Prophétie",
            de: "Prophezeiung",
            es: "Profecía",
            it: "Profezia",
            pt: "Profecia",
          },
          effect: {
            en: "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
            ja: "いずれかのプレイヤーのデッキの上部から最大3枚のカードを見て、好きなように再配置します。",
            fr: "Regardez jusqu'à 3 cartes du haut du deck de l'un ou l'autre des joueurs et réorganisez-les comme vous le souhaitez.",
            de: "Schauen Sie sich bis zu 3 Karten von der Spitze des Decks eines Spielers an und ordnen Sie sie nach möchten.",
            es: "Mire hasta 3 cartas desde la parte superior del mazo de cualquiera de los jugadores y reorganizarlas como desee.",
            it: "Guarda fino a 3 carte dalla parte superiore del mazzo di entrambi i giocatori e riorganizzarle come preferisci.",
            pt: "Olhe até 3 cartas do topo do deck dos jogadores e reorganize -as como quiser.",
          },
          damage: None,
        },
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Dark Mind",
            ja: "暗い心",
            fr: "Esprit sombre",
            de: "Dunkler Verstand",
            es: "Mente oscura",
            it: "Mente oscura",
            pt: "Mente sombria",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon en banca, elija 1 de ellos y este ataque le da 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegline 1 e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
