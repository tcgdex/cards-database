import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Electabuzz",
         ja: "Electabuzz",
         fr: "Electabuzz",
         de: "Electabuzz",
         es: "Electabuzz",
         it: "Electabuzz",
         pt: "Electabuzz",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [125],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Stages of Evolution",
            ja: "進化の段階",
            fr: "Étapes de l'évolution",
            de: "Evolutionsphasen",
            es: "Etapas de evolución",
            it: "Fase dell'evoluzione",
            pt: "Estágios da evolução",
          },
          effect: {
            en: "As long as Electabuzz is an Evolved PokÃ©mon, any damage done to Electabuz by attacks from your opponent's PokÃ©mon that has any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
            ja: "Electabuzzが進化したポカモンである限り、特別なエネルギーカードを添付した相手のポカモンからの攻撃によってElectabuzに与えられた損害は40減少します（脱力感と抵抗を適用した後）。",
            fr: "Tant que Electabuzz est un poké évolué, tout dommage causé à Electabuz par des attaques de Poké mon de votre adversaire qui a des cartes d'énergie spéciales qui y sont attachées est réduite de 40 (après avoir appliqué la faiblesse et la résistance).",
            de: "Solange Electabuzz ein weiterentwickeltes Poké Mon Mon ist, wird jeder Schaden, der durch Angriffe aus dem Poké Mon Montag Ihres Gegners angerichtet ist und mit der speziellen Energiekarten angenommen werden, um 40 Uhr reduziert (nachdem Schwäche und Widerstand angewendet werden).",
            es: "Mientras Electabuzz sea un Poké Mon evolucionado, cualquier daño hecho a Elegabuz por ataques de Poké Mon de su oponente que tiene alguna carta de energía especial adjunta se reduce en 40 (después de aplicar debilidad y resistencia).",
            it: "Finché Electabuzz è un poké evoluto, qualsiasi danno fatto a Electabuz dagli attacchi del poké del tuo avversario che ha schede energetiche speciali ad esso collegate è ridotta di 40 (dopo aver applicato debolezza e resistenza).",
            pt: "Enquanto Electabuzz for um Poké -Mon evoluído, qualquer dano causado a Electabuz por ataques do Poké -Mon do seu oponente que possui cartas de energia especiais anexadas a ele é reduzido em 40 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Double Shock",
            ja: "二重衝撃",
            fr: "Décor",
            de: "Doppelschock",
            es: "Doble shock",
            it: "Doppio shock",
            pt: "Choque duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads. If either of the coins is heads, the Defending Pokemon is now Paralyzed.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。いずれかのコインがヘッドである場合、防御ポケモンは麻痺しています。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes. Si l'une ou l'autre des pièces est la tête, le Pokémon en défense est maintenant paralysé.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe. Wenn einer der Münzen Köpfe ist, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas. Si alguna de las monedas es cabezas, el Pokémon defensor ahora está paralizado.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste. Se una delle monete è testa, il Pokemon in difesa è ora paralizzato.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças. Se qualquer uma das moedas estiver cabeças, o Pokémon atual está agora paralisado.",
          },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Luster Blast",
            ja: "光沢のある爆発",
            fr: "Blast lustre",
            de: "Glanze Explosion",
            es: "Explosión de brillo",
            it: "Blast di lucentezza",
            pt: "Explosão de brilho",
          },
          effect: {
            en: "Discard 3 Energy attached to Electabuzz.",
            ja: "ElectaBuzzに取り付けられた3つのエネルギーを捨てます。",
            fr: "Jetez 3 énergie attachée à Electabuzz.",
            de: "Die Energie verwerfen 3 an Electabuzz gebunden.",
            es: "Deseche 3 energía unida a Electabuzz.",
            it: "Scartare 3 energia attaccata a Electabuzz.",
            pt: "Descarte 3 energia ligada ao Electabuzz.",
          },
          damage: 70,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
