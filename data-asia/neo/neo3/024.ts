import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Chinchou",
         ja: "チンチョウ",
         fr: "Chinchou",
         de: "Chinchou",
         es: "Chinchou",
         it: "Chinchou",
         pt: "Chinchou",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [170],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Positive Ion",
            ja: "正のイオン",
            fr: "Ion positif",
            de: "Positives Ion",
            es: "Ion positivo",
            it: "Ione positivo",
            pt: "Íon positivo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires. Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más. Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più. Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos. Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Negative Ion",
            ja: "負のイオン",
            fr: "Ion négatif",
            de: "Negatives Ion",
            es: "Ion negativo",
            it: "Ione negativo",
            pt: "Íon negativo",
          },
          effect: {
            en: "If the Defending Pokemon attacks Chinchou during your opponent's next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching or evolving either Pokemon ends this effect.)",
            ja: "防御するポケモンが相手の次のターン中にチンチョウを攻撃する場合、チンチョーに与えられた損害は10増加します（脱力感と抵抗を適用する前に）。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
            fr: "Si le Pokémon en défense attaque Chinchou lors du prochain virage de votre adversaire, tout dommage causé à Chinchou est réduit de 10 (avant d'appliquer une faiblesse et une résistance). (Benching ou évolution de Pokémon termine cet effet.)",
            de: "Wenn der verteidigende Pokemon Chinchou während der nächsten Runde Ihres Gegners angreift, wird alle Schäden an Chinchou um 10 reduziert (bevor sie Schwäche und Widerstand anwenden). (BENCHING oder EVOLING ENDERUNG POKEMON beendet diesen Effekt.)",
            es: "Si el Pokémon defensor ataca a Chinchou durante el próximo turno de tu oponente, cualquier daño hecho a Chinchou se reduce en 10 (antes de aplicar debilidad y resistencia). (Benching o evolucionando o Pokémon termina este efecto).",
            it: "Se il Pokemon in carica attacca Chinchou durante il prossimo turno dell'avversario, qualsiasi danno fatto a Chinchou viene ridotto di 10 (prima di applicare debolezza e resistenza). (Panca o evolvendo Pokemon termina questo effetto.)",
            pt: "Se o pokemon atual atacar Chinchou durante o próximo turno do seu oponente, qualquer dano causado a Chinchou será reduzido em 10 (antes de aplicar fraqueza e resistência). (Bancho ou evolução de Pokemon termina esse efeito.)",
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
