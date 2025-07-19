import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Latios (Delta Species)",
         ja: "ラティオス（デルタ種）",
         fr: "Latios (espèces delta)",
         de: "Latios (Delta -Arten)",
         es: "Latios (especies delta)",
         it: "Latios (specie delta)",
         pt: "Latios (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [381],
      hp: 80,
      types: ["Water"],
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
            en: "As long as you have Latias or Latias ex in play, each player's Evolved PokÃ©mon (excluding PokÃ©mon-ex) can't use any PokÃ©-Bodies.",
            ja: "LatiasまたはLatias Exがプレイしている限り、各プレイヤーの進化したPokã©Mon（Pokã©Mon-Exを除く）はPokã©-Bodiesを使用できません。",
            fr: "Tant que vous avez des Latias ou des Latias ex en jeu, le Pokã © Mon (à l'exclusion de Poké-EX) de chaque joueur) ne peut utiliser aucun pokã © -Bodies.",
            de: "Solange Sie Latias oder Latias EX im Spiel haben, können die entwickelten Poké-Mons des einzelnen Spielers (mit Ausnahme von Poké mon-ex) keine Poké-Boden verwenden.",
            es: "Mientras tenga Latias o Latias Ex en juego, el Poké de cada jugador evolucionó Mon (excluyendo Poké Mon-Ex) no puede usar ningún boleto de Poké.",
            it: "Finché hai laties o latias ex in gioco, il poké evoluto di ogni giocatore (escluso Poké mon-ex) non può usare alcun poké-bodies.",
            pt: "Enquanto você tiver Latias ou Latias ex em jogo, o Poké Mon evoluído de cada jogador (excluindo Poké Mon-Ex) não pode usar corpos de Poké.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dive",
            ja: "ダイビング",
            fr: "Plonger",
            de: "Tauchen",
            es: "Bucear",
            it: "Tuffo",
            pt: "Mergulho",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Aqua Blast",
            ja: "アクアブラスト",
            fr: "Explosion aqua",
            de: "Aqua Explosion",
            es: "Aqua Blast",
            it: "Aqua Blast",
            pt: "Aqua Blast",
          },
          effect: {
            en: "Discard a Water Energy attached to Latios.",
            ja: "ラティオスに取り付けられた水エネルギーを捨てます。",
            fr: "Jeter une énergie d'eau attachée aux Latios.",
            de: "Latios eine Wasserergie entsorgen.",
            es: "Deseche una energía de agua unida a Latios.",
            it: "Scartare un'energia idrica attaccata ai lati.",
            pt: "Descarte uma energia hídrica ligada aos latios.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
