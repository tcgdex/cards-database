import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Persian",
         ja: "ペルシャ語",
         fr: "persan",
         de: "persisch",
         es: "persa",
         it: "persiano",
         pt: "persa",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [53],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Pounce",
            ja: "騒ぎます",
            fr: "Bondir",
            de: "Sprung",
            es: "Saltar",
            it: "Balzo",
            pt: "Punce",
          },
          effect: {
            en: "If the Defending Pokemon attacks Persian during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance).(Benching either Pokemon ends this effect.)",
            ja: "防衛ポケモンが対戦相手の次のターン中にペルシャ語を攻撃した場合、攻撃によって与えられた損害は10倍に減少します（脱力感と抵抗を適用した後）。",
            fr: "Si le Pokémon en défense attaque le persan pendant le prochain tour de votre adversaire, tout dommage causé par l'attaque est réduit de 10 (après avoir appliqué une faiblesse et une résistance). (Le banc de Pokémon termine cet effet.)",
            de: "Wenn der verteidigende Pokemon Persisch während der nächsten Runde Ihres Gegners angreift, wird jeder Schaden, der durch den Angriff angerichtet wird, um 10 reduziert (nach Anbringen von Schwäche und Widerstand).",
            es: "Si el Pokémon defensor ataca al persa durante el próximo turno de tu oponente, cualquier daño hecho por el ataque se reduce en 10 (después de aplicar debilidad y resistencia). (Benching Pokemon termina este efecto).",
            it: "Se i Pokemon in carica attaccano il persiano durante il prossimo turno dell'avversario, qualsiasi danno causato dall'attacco viene ridotto di 10 (dopo aver applicato la debolezza e la resistenza). (Benching entrambi i pokemon termina questo effetto.)",
            pt: "Se o defesa de Pokemon atacar o persa durante o próximo turno do seu oponente, qualquer dano causado pelo ataque é reduzido em 10 (após aplicar fraqueza e resistência). (Bancando o Pokemon termina esse efeito.)",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
