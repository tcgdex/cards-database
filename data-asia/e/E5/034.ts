import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Piloswine - 034/088",
         ja: "Piloswine -034/088",
         fr: "Piloswine - 034/088",
         de: "Piloswine - 034/088",
         es: "Piloswine - 034/088",
         it: "Piloswine - 034/088",
         pt: "Piloswine - 034/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [221],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
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
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Trample",
            ja: "トランプ",
            fr: "Bafouer",
            de: "Trampeln",
            es: "Pisotear",
            it: "Calpestare",
            pt: "Atropela",
          },
          effect: {
            en: "For each Benched Pokemon (yours and your opponent's), flip a coin. If heads, this attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ベンチ付きポケモン（あなたと相手）ごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Pour chaque pokemon bancé (le vôtre et celui de votre adversaire), retournez une pièce. Si la tête, cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Für jedes Bank -Pokemon (Ihr und Ihr Gegner) drehen Sie eine Münze. Wenn dieser Angriff dieses Pokémon 20 Schaden zufügt. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Para cada Pokémon en banca (el tuyo y el de tu oponente), voltea una moneda. Si se dirige, este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Per ogni Pokemon in panchina (il tuo e il tuo avversario), capovolgi una moneta. Se la testa, questo attacco infligge 20 danni a quel pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Para cada Pokémon em banco (o seu e o seu oponente), vire uma moeda. Se as cabeças, esse ataque causam 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
