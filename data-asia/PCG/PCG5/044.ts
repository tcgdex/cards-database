import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Girafarig",
         ja: "Girafarig",
         fr: "Girafarig",
         de: "Girafarig",
         es: "Girafarig",
         it: "Girafarig",
         pt: "Girafarig",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [203],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Rear Sensor",
            ja: "リアセンサー",
            fr: "Capteur arrière",
            de: "Hinterer Sensor",
            es: "Sensor trasero",
            it: "Sensore posteriore",
            pt: "Sensor traseiro",
          },
          effect: {
            en: "Each player's Active Basic PokÃ©mon (excluding PokÃ©mon-ex) can't use any PokÃ©-Powers.",
            ja: "各プレイヤーのアクティブな基本的なPokã©Mon（Pokã©Mon-Exを除く）は、Pokã©Powersを使用できません。",
            fr: "Poké de base actif de chaque joueur (à l'exclusion de Pokã © Mon-EX) ne peut utiliser aucun pokã © -Powers.",
            de: "Die aktiven Basis-Poké-Mon-Poké-Mon-Poké-Mone (mit Ausnahme von Poké Mon-EX) können keine Poké-Wächter verwenden.",
            es: "El Poké Básico Active Basic de cada jugador (excluyendo Poké Mon-Ex) no puede usar ninguna potencia de Poké.",
            it: "Il poké di base attivo di ciascun giocatore (escluso Poké mon-ex) non può usare alcun poké-powers.",
            pt: "O Poké Mon Basic Active (excluindo o Poké Mon-Ex) não pode usar nenhum powerpowers.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Foresight",
            ja: "先見性",
            fr: "Prévoyance",
            de: "Voraussicht",
            es: "Previsión",
            it: "Lungimiranza",
            pt: "Previsão",
          },
          effect: {
            en: "Look at the top 5 cards on either player's deck and put them back on top of that player's deck in any order you like.",
            ja: "どちらのプレイヤーのデッキの上位5枚のカードを見て、好きな順序でそのプレイヤーのデッキの上に戻します。",
            fr: "Regardez les 5 meilleures cartes sur le deck de l'un ou l'autre des joueurs et remettez-les sur le deck de ce joueur dans tous les commandes que vous aimez.",
            de: "Schauen Sie sich die Top 5 -Karten auf beiden Spielern an und legen Sie sie in beliebiger Reihenfolge, die Sie mögen, wieder auf das Deck dieses Spielers.",
            es: "Mire las 5 cartas principales en el mazo de cualquiera de los jugadores y vuelva a colocarlas en la parte superior del mazo de ese jugador en cualquier orden que desee.",
            it: "Guarda le 5 migliori carte sul mazzo di entrambi i giocatori e rimettile in cima al mazzo di quel giocatore in qualsiasi ordine che ti piace.",
            pt: "Olhe as 5 principais cartas no baralho de qualquer jogador e coloque -as de volta em cima do baralho desse jogador em qualquer ordem que desejar.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Disorder",
            ja: "障害",
            fr: "Trouble",
            de: "Störung",
            es: "Trastorno",
            it: "Disturbo",
            pt: "Transtorno",
          },
          effect: {
            en: "If the Defending Pokemon has any Special Energy cards attached to it, the Defending Pokemon is now Confused.",
            ja: "防衛ポケモンに特別なエネルギーカードが付いている場合、防御ポケモンは混乱しています。",
            fr: "Si le Pokémon en défense a des cartes d'énergie spéciales qui y sont attachées, le Pokémon en défense est désormais confus.",
            de: "Wenn das verteidigende Pokémon spezielle Energiekarten mit sich bringt, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía especial adjunta, el Pokémon defensor ahora está confundido.",
            it: "Se il Pokemon in difesa ha delle carte energetiche speciali ad esso collegate, il Pokemon in carica è ora confuso.",
            pt: "Se o Pokémon atual tiver algum cartões de energia especiais anexados a ele, o Pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
