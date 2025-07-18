import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Solrock",
         ja: "ソロック",
         fr: "Solrock",
         de: "Solrock",
         es: "Solrock",
         it: "Solrock",
         pt: "Solrock",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [338],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Sunbeam",
            ja: "サンビーム",
            fr: "Rayon de soleil",
            de: "Sonnenstrahl",
            es: "Rayo de sol",
            it: "Raggio di sole",
            pt: "Raio solar",
          },
          effect: {
            en: "The maximum HP for each Lunatone you have in play is now 80.",
            ja: "プレイ中の各ルナトンの最大HPは80です。",
            fr: "Le HP maximum pour chaque lunatone que vous avez en jeu est maintenant de 80.",
            de: "Die maximale HP für jeden Lunaton, den Sie im Spiel haben, ist jetzt 80.",
            es: "El HP máximo para cada lunatone que tienes en juego ahora es de 80.",
            it: "Il massimo HP per ogni Lunatone che hai in gioco è ora 80.",
            pt: "O HP máximo para cada Lunatone que você tem em jogo agora é 80.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scorching Light",
            ja: "焦げた光",
            fr: "Lumière torride",
            de: "Leichter Licht",
            es: "Luz abrasadora",
            it: "Luce bruciante",
            pt: "Luz escaldante",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si la queue, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si las colas, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, il Pokemon in carica viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se as caudas, o pokemon defensor agora está queimado.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Reflected Beam",
            ja: "反射ビーム",
            fr: "Poutre réfléchie",
            de: "Reflektierter Strahl",
            es: "Haz reflejado",
            it: "Raggio riflesso",
            pt: "Feixe refletido",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. This attack does 10 damage to that Pokemon for each Lunatone you have in play. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、プレイ中のルナトンごとにそのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon pour chaque lunatone que vous avez en jeu. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. Dieser Angriff schädigt das Pokémon für jeden Lunaton, den Sie im Spiel haben, 10 Schäden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Este ataque hace 10 daños a ese Pokémon por cada lunatone que tienes en juego. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Questo attacco infligge 10 danni a quel pokemon per ogni Lunatone che hai in gioco. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Este ataque causa 10 danos a esse Pokémon para cada Lunatone que você tem em jogo. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
