import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Squirtle",
         ja: "squirtle",
         fr: "Écourter",
         de: "Squirtle",
         es: "Chirriar",
         it: "Squirtle",
         pt: "Esguicho",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [7],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Bubble",
            ja: "バブル",
            fr: "Bulle",
            de: "Blase",
            es: "Burbuja",
            it: "Bolla",
            pt: "Bolha",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent's Active Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le pokemon actif de votre adversaire est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das aktive Pokémon Ihres Gegners jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon activo de tu oponente ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon attivo del tuo avversario è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon ativo do seu oponente agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Withdraw",
            ja: "撤回する",
            fr: "Retirer",
            de: "Zurückziehen",
            es: "Retirar",
            it: "Ritirare",
            pt: "Retirar",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokemon by attacks.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、攻撃によってこのポケモンに与えられたすべてのダメージを防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, évitez tous les dégâts causés à ce pokemon par des attaques.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Kurve Ihres Gegners alle Schäden dieses Pokémon durch Angriffe verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todo el daño causado a este Pokémon por ataques.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono tutti i danni arrecati a questo Pokemon dagli attacchi.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os danos causados a este Pokémon por ataques.",
          },
          damage: None,
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
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
