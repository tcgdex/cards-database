import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Rapidash",
         ja: "ブレインのラピダッシュ",
         fr: "Rapidash de Blaine",
         de: "Blaines Rapidash",
         es: "Ratashash de Blaine",
         it: "Blaine's Rapidash",
         pt: "Rapidash de Blaine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [78],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Fire Mane",
            ja: "ファイヤーマネ",
            fr: "Crique de feu",
            de: "Feuermähne",
            es: "Melena de fuego",
            it: "Mane",
            pt: "Juba de fogo",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Stamp",
            ja: "スタンプ",
            fr: "Timbre",
            de: "Stempel",
            es: "Estampilla",
            it: "Timbro",
            pt: "Carimbo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage (to the Defending Pokemon) and 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) If tails, this attack does 30 damage (to the Defending Pokemon).",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて、ポケモンを防御するポケモンに10件以上ダメージを与え、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、この攻撃は（防御ポケモンに）30のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 30 dégâts plus 10 dommages supplémentaires (au Pokémon en défense) et 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Si les queues, cette attaque fait 30 dégâts (au Pokémon en défense).",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden (für das verteidigende Pokémon) und 10 Schäden an den Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für Bank -Pokémon an.) Wenn Schwänze dieser Angriff 30 Schaden anrichten (auf das verteidigende Pokémon).",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 daños más (para el Pokémon defensor) y 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para Pokémon de banca). Si las colas, este ataque hace 30 daños (al Pokémon defensor).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 danni in più (al Pokemon in difesa) e 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Se le code, questo attacco infligge 30 danni (al Pokemon in difesa).",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos (aos Pokémon defensores) e 10 danos a cada um dos Pokémon em banco do seu oponente. (Não aplique fraqueza e resistência a Pokemon em bancada.) Se as caudas, esse ataque causam 30 danos (aos Pokémon defensores).",
          },
        },
      ],


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
