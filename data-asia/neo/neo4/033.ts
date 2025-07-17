import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Dewgong",
         ja: "軽いデューゴン",
         fr: "Dewgong léger",
         de: "Leichte Dewgong",
         es: "Ligero de rocío",
         it: "Leggero Dewgong",
         pt: "Dewgong leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [87],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Freezing Breath",
            ja: "凍る息",
            fr: "Haleine glaciale",
            de: "Gefrierhauch",
            es: "Respiración congelada",
            it: "Bioringo di congelamento",
            pt: "Respiração congelante",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se as caudas, o pokemon defensor agora está dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Ice Pillar",
            ja: "アイスピラー",
            fr: "Pilier de glace",
            de: "Eissäule",
            es: "Pilar de hielo",
            it: "Pilastro di ghiaccio",
            pt: "Pilar de gelo",
          },
          effect: {
            en: "Until the end of your opponent's next turn, as long as Light Dewgong is your Active Pokemon, prevent all damage done by attacks to your Benched Pokemon. (Any other effects of attacks still happen.)",
            ja: "ライトデューゴンがアクティブなポケモンである限り、対戦相手の次のターンの終わりまで、ベンチ付きポケモンへの攻撃によってすべての損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Jusqu'à la fin du prochain virage de votre adversaire, tant que la dewgong légère est votre Pokémon actif, évitez tous les dégâts causés par les attaques à votre pokemon banc. (Tout autre effet des attaques se produit.)",
            de: "Verhindern Sie bis zum Ende der nächsten Runde Ihres Gegners, solange es sich um leichte Dewgong handelt, Ihr aktives Pokémon, alle Schäden durch Angriffe auf Ihr Bankpokémon. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Hasta el final del próximo turno de tu oponente, siempre que la luz dewgong sea tu Pokémon activo, evite todo el daño causado por los ataques a tu Pokémon de banca. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Fino alla fine del turno successivo del tuo avversario, fintanto che il Dewgong leggero è il tuo Pokemon attivo, impedisci tutti i danni causati dagli attacchi al Pokemon in panchina. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Até o final do próximo turno do seu oponente, desde que o Dewgong leve seja o seu Pokémon ativo, evite todos os danos causados por ataques ao seu Pokemon em banco. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
