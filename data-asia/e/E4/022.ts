import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwhirl",
         ja: "PoliWhirl",
         fr: "Polihirl",
         de: "Poliwhirl",
         es: "Poliwhirl",
         it: "Poliwhirl",
         pt: "Poliwhirl",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [61],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Twiddle",
            ja: "ツイドル",
            fr: "Tourner",
            de: "Drehen",
            es: "Girar",
            it: "Twiddle",
            pt: "Giro",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se as caudas, o pokemon defensor agora está dormindo.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Double Kick",
            ja: "ダブルキック",
            fr: "Coup de pied",
            de: "Double Kick",
            es: "Doble patada",
            it: "Doppio calcio",
            pt: "Chute duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

};
