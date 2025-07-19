import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Latias (Delta Species)",
         ja: "ラティアス（デルタ種）",
         fr: "Latias (espèces delta)",
         de: "Latias (Delta -Arten)",
         es: "Latias (especie delta)",
         it: "Latias (specie delta)",
         pt: "Latias (espécies Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [380],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Dual Aura",
            ja: "デュアルオーラ",
            fr: "Aura à double",
            de: "Dual Aura",
            es: "Aura dual",
            it: "Doppia aura",
            pt: "Aura dupla",
          },
          effect: {
            en: "As long as you have Latios or Latios ex in play, each player's Evolved PokÃ©mon (excluding PokÃ©mon-ex) can't use any PokÃ©-Bodies.",
            ja: "LatiosまたはLatios Exがプレイしている限り、各プレイヤーの進化したPokã©Mon（Pokã©Mon-Exを除く）はPokã©Bodiesを使用できません。",
            fr: "Tant que vous avez des Latios ou Latios Ex en jeu, le Pokã © Mon (à l'exclusion de Poké-EX) de chaque joueur) ne peut utiliser aucun pokã © -Bodies.",
            de: "Solange Sie Latios oder Latios Ex im Spiel haben, können die entwickelten Poké Mons jedes Spielers (mit Ausnahme von Poké mon-ex) keine Poké-Boden verwenden.",
            es: "Mientras tenga Latios o Latios ex en juego, el Poké de cada jugador evolucionó Mon (excluyendo Poké Mon-Ex) no puede usar ningún boleto de Poké.",
            it: "Finché hai latios o latios ex in gioco, il poké evoluto di ogni giocatore (escluso Poké mon-ex) non può usare alcun poké-bodies.",
            pt: "Enquanto você tiver Latios ou Latios ex em jogo, o Poké-Mon evoluído de cada jogador (excluindo Poké Mon-Ex) não pode usar corpos de Poké.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spearhead",
            ja: "スピアヘッド",
            fr: "Fer de lance",
            de: "Speerspitze",
            es: "Punta de lanza",
            it: "Lancia",
            pt: "Ponta de lança",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Dragon Claw",
            ja: "ドラゴンクロー",
            fr: "Griffe de dragon",
            de: "Drachenklaue",
            es: "Garra de dragón",
            it: "Dragon Claw",
            pt: "Garra de dragão",
          },
          damage: 40,
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
