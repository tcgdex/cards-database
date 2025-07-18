import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Whitney's Wigglytuff",
         ja: "ホイットニーのウィッグライツ",
         fr: "Wigney's Wigglytuff",
         de: "Whitneys Wigglytuff",
         es: "Wigglytuff de Whitney",
         it: "Whitney's Wigglytuff",
         pt: "Wiglytuff de Whitney",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [40],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slap",
            ja: "平手打ち",
            fr: "Gifler",
            de: "Schlagen",
            es: "Bofetada",
            it: "Schiaffo",
            pt: "Tapa",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Inflate",
            ja: "膨らみます",
            fr: "Gonfler",
            de: "Aufblasen",
            es: "Inflar",
            it: "Gonfiare",
            pt: "Inflar",
          },
          effect: {
            en: "Flip a coin. If heads and if the Defending Pokemon attacks Whitney's Wigglytuff during your opponent's next turn, any damage done by the attack is reduced by 20 (after applying Weakness and Resistance.) (Benching either Pokemon ends this effect.)",
            ja: "コインをひっくり返します。ヘッドとディフェンディングポケモンが相手の次のターン中にホイットニーのウィッグライツを攻撃した場合、攻撃によって与えられた損害は20倍に減少します（脱力感と抵抗を適用した後）（ポケモンのベンチングはこの効果を終了します。）",
            fr: "Retourner une pièce. Si les têtes et si le Pokémon en défense attaque Wigney de Wiggytuff lors du prochain tour de votre adversaire, tout dommage causé par l'attaque est réduit de 20 (après application de la faiblesse et de la résistance.) (Le banc de Pokémon termine cet effet.)",
            de: "Eine Münze drehen. Wenn die Köpfe und der Titelverteidiger während der nächsten Runde Ihres Gegners Whitneys Wigglytuff in der nächsten Runde angreift, wird jeder Schaden, der durch den Angriff verursacht wird, um 20 reduziert (nach Anbringen von Schwäche und Widerstand) (Bank -Beudung eines der beiden Pokemon beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige y si el Pokémon defensor ataca a Wigglytuff de Whitney durante el próximo turno de tu oponente, cualquier daño hecho por el ataque se reduce en 20 (después de aplicar debilidad y resistencia. (Benching Pokemon termina este efecto).",
            it: "Capovolgi una moneta. Se le teste e se il Pokemon in carica attacca il Wigglytuff di Whitney durante il prossimo turno dell'avversario, qualsiasi danno causato dall'attacco viene ridotto di 20 (dopo aver applicato la debolezza e la resistenza.) (Benching uno di Pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças e se o defesa de Pokemon atingir o Wigglytuff de Whitney durante o próximo turno do seu oponente, qualquer dano causado pelo ataque é reduzido em 20 (após aplicar fraqueza e resistência.) (A bancada de Pokemon termina esse efeito.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
