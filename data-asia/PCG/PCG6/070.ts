import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Mightyena (Delta Species)",
         ja: "マイティエナ（デルタ種）",
         fr: "Mightyena (espèces delta)",
         de: "Mightyena (Delta -Arten)",
         es: "Mightyena (especie delta)",
         it: "Mightyena (Delta Species)",
         pt: "Mightyena (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [262],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Delta Fang",
            ja: "デルタファン",
            fr: "Delta Fang",
            de: "Delta Fang",
            es: "Colmillo de delta",
            it: "Delta Fang",
            pt: "Delta Fang",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, that Pokemon can't attack during your opponent's next turn.",
            ja: "防御ポケモンがポケモンエクスの場合、そのポケモンは相手の次のターン中に攻撃できません。",
            fr: "Si le Pokémon en défense est Pokemon-EX, ce Pokémon ne peut pas attaquer pendant le prochain tour de votre adversaire.",
            de: "Wenn das verteidigende Pokemon Pokemon-ex ist, kann dieses Pokemon während der nächsten Runde Ihres Gegners nicht angreifen.",
            es: "Si el Pokémon defensor es Pokémon-EX, ese Pokémon no puede atacar durante el próximo turno de tu oponente.",
            it: "Se il Pokemon in carica è Pokemon-Ex, quel Pokemon non può attaccare durante il prossimo turno del tuo avversario.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse Pokemon não pode atacar durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Gang Up",
            ja: "ギャングアップ",
            fr: "Se ranger",
            de: "Banden Sie auf",
            es: "Conspirar",
            it: "Gang up",
            pt: "Gange up",
          },
          effect: {
            en: "Does 10 damage times the number of Darkness Pokemon and Metal Pokemon you have in play.",
            ja: "闇のポケモンとメタルポケモンの数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de Pokémon de l'obscurité et du pokemon en métal que vous avez en jeu.",
            de: "Hat 10 Schadenszeiten die Anzahl der Dunkelheitspokemon und Metallpokemon, die Sie im Spiel haben.",
            es: "Hace 10 veces el número de Pokémon y Pokémon de metal de la oscuridad que tienes en juego.",
            it: "Fa 10 danni volte il numero di Pokemon Darkness e Pokemon di metallo che hai in gioco.",
            pt: "Faz 10 danos vezes o número de Pokémon da escuridão e Pokémon de metal que você tem em jogo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
