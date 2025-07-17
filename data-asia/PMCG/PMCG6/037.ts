import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Magikarp",
         ja: "ジョバンニのマジカルプ",
         fr: "Magikarp de Giovanni",
         de: "Giovannis Magikarp",
         es: "Magikarp de Giovanni",
         it: "Giovanni's Magikarp",
         pt: "Magikarp de Giovanni",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Ancestral Memory",
            ja: "先祖の記憶",
            fr: "Mémoire ancestrale",
            de: "Vorfahrener Erinnerung",
            es: "Memoria ancestral",
            it: "Memoria ancestrale",
            pt: "Memória ancestral",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Giovanni's Magikarp stays in play (even putting Giovanni's Magikarp on the Bench won't let you use it again).",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。いずれにせよ、ジョヴァンニのマジカルプが遊んでいる限り、この攻撃を再び使用することはできません（ジョバンニのマジカルプをベンチに置くことさえ、再び使用することはできません）。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Quoi qu'il en soit, vous ne pouvez pas utiliser à nouveau cette attaque tant que Magikarp de Giovanni reste en jeu (même mettre Magikarp de Giovanni sur le banc ne vous laissera pas l'utiliser).",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. In jedem Fall können Sie diesen Angriff nicht wieder anwenden, solange Giovannis Magikarp im Spiel bleibt (selbst wenn Sie Giovannis Magikarp auf die Bank legen, lässt Sie ihn nicht wieder verwenden).",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada. De cualquier manera, no puedes usar este ataque nuevamente siempre que Magikarp de Giovanni se mantenga en juego (incluso poner el magikarp de Giovanni en el banco no te permitirá volver a usarlo).",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Ad ogni modo, non puoi usare di nuovo questo attacco fintanto che il Magikarp di Giovanni rimane in gioco (anche mettendo il Magikarp di Giovanni in panchina non ti permette di usarlo di nuovo).",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. De qualquer forma, você não pode usar esse ataque novamente enquanto o Magikarp de Giovanni permanecer em jogo (mesmo colocando o Magikarp de Giovanni no banco não permitirá que você o use novamente).",
          },
          damage: 40,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Flail Around",
            ja: "周りを燃やします",
            fr: "Se balancer",
            de: "Umdrehen",
            es: "Agitarse",
            it: "Flagano intorno",
            pt: "Fula ao redor",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
