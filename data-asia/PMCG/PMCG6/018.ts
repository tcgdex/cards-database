import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Beedrill",
         ja: "コガのビードリル",
         fr: "Beedrill de Koga",
         de: "Kogas Beedrill",
         es: "Beedrill de Koga",
         it: "Koga's Beedrill",
         pt: "KOGA's Beedrill",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Nerve Poison",
            ja: "神経毒",
            fr: "Poison nerveux",
            de: "Nervengift",
            es: "Veneno nervioso",
            it: "Veleno nervoso",
            pt: "Veneno nervoso",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed and Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今や麻痺し、毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé et empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokémon jetzt gelähmt und vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado y envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato e avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está paralisado e envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hyper Needle",
            ja: "ハイパー針",
            fr: "Hyper aiguille",
            de: "Hypernadel",
            es: "Hiper aguja",
            it: "Iper ago",
            pt: "Agulha hiper",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Koga's Beedrill stays in play (even putting Koga's Beedrill on the Bench won't let you use it again).",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。いずれにせよ、KogaのBeedrillが遊び続ける限り、この攻撃を再び使用することはできません（KogaのBeedrillをベンチに置くことでも、再び使用できません）。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Quoi qu'il en soit, vous ne pouvez pas utiliser à nouveau cette attaque tant que Beedrill de Koga reste en jeu (même mettre le Beedrill de Koga sur le banc ne vous laissera pas l'utiliser).",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. In jedem Fall können Sie diesen Angriff nicht wieder anwenden, solange Kogas Beedrill im Spiel bleibt (selbst wenn Sie Kogas Beedrill auf die Bank legen, lässt Sie ihn nicht wieder verwenden).",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada. De cualquier manera, no puedes usar este ataque nuevamente siempre que Beedrill de Koga se mantenga en juego (incluso poner a Koga's Beedrill en el banco no te permitirá volver a usarlo).",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Ad ogni modo, non puoi usare di nuovo questo attacco fintanto che il beedrill di Koga rimane in gioco (anche mettendo il beedrill di Koga in panchina non ti permette di usarlo di nuovo).",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. De qualquer forma, você não pode usar esse ataque novamente, desde que o Beedrill de Koga permaneça em jogo (até mesmo colocando o Beedrill de Koga no banco não permitirá que você o use novamente).",
          },
          damage: 70,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
