import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Articuno",
         ja: "articuno",
         fr: "Articuno",
         de: "Articuno",
         es: "Articuno",
         it: "Articuno",
         pt: "Articuno",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [144],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Freeze Dry",
            ja: "凍結します",
            fr: "Sèche",
            de: "Trocken einfrieren",
            es: "Congelarse seco",
            it: "Congelare asciutto",
            pt: "Congelar seco",
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
          damage: 30,
        },
        {
          cost: ["Water", "Water", "Water", "Water"],
          name: {
            en: "Blizzard",
            ja: "ブリザード",
            fr: "Blizzard",
            de: "Schneesturm",
            es: "Ventisca",
            it: "Bufera di neve",
            pt: "Nevasca",
          },
          effect: {
            en: "Flip a coin. If heads, this attack also does 10 damage to each of your opponent's Benched Pokemon. If tails, this attack also does 10 damage to each of your Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige également 10 dégâts à chacun des pokemon bancés de votre adversaire. Si Tails, cette attaque fait également 10 dégâts à chacun de vos pokemon bancés. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn dieser Angriff auch 10 Schäden an den Bankpokémon Ihres Gegners verursacht. Wenn Schwänze, verursacht dieser Angriff auch 10 Schäden an jedem Ihrer Bankpokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque también hace 10 daños a cada Pokémon de banca de tu oponente. Si Tails, este ataque también hace 10 daños a cada uno de sus Pokémon de banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge anche 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. Se le code, questo attacco infligge anche 10 danni a ciascuno dei Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque também causam 10 danos a cada um dos Pokémon em bancada do seu oponente. Se as caudas, esse ataque também causam 10 danos a cada um dos seus Pokémon com bancada. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
