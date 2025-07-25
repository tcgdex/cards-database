import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Azumarill",
         ja: "アズマリル",
         fr: "Azumarill",
         de: "Azumarill",
         es: "Azumarill",
         it: "Azumarill",
         pt: "Azumarill",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [184],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Bubble Shower",
            ja: "バブルシャワー",
            fr: "Douche à bulles",
            de: "Blasendusche",
            es: "Ducha de burbujas",
            it: "Doccia a bolle",
            pt: "Chuveiro de bolhas",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed and this attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンが麻痺し、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est désormais paralysé et cette attaque fait 10 dégâts à chacun des Pokémon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokémon jetzt gelähmt und dieser Angriff schädigt 10 Pokemon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado y este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in carica è ora paralizzato e questo attacco fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon atual agora está paralisado e esse ataque causa 10 danos a cada um dos Pokémon em banco do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
