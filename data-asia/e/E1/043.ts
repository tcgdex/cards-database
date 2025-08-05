import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Graveler",
         ja: "砂利",
         fr: "Graveleuse",
         de: "Schotter",
         es: "Grava",
         it: "Graveler",
         pt: "Grave",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [75],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rock Hurl",
            ja: "ロックハール",
            fr: "Rock Hurl",
            de: "Rock Hurl",
            es: "Lanzar una roca",
            it: "Rock Hurl",
            pt: "Arremesso de rock",
          },
          effect: {
            en: "Don't apply Resistance.",
            ja: "抵抗を適用しないでください。",
            fr: "N'appliquez pas la résistance.",
            de: "Wenden Sie keinen Widerstand an.",
            es: "No aplique resistencia.",
            it: "Non applicare resistenza.",
            pt: "Não aplique resistência.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Rock Slide",
            ja: "ロックスライド",
            fr: "Glissement",
            de: "Felsrutsche",
            es: "Tobogán de roca",
            it: "Slide di roccia",
            pt: "Slide de rocha",
          },
          effect: {
            en: "Choose 2 of your opponent's Benched Pokemon (1 if he or she has only 1). This attack does 10 damage to each of those Pokemon. (Don't apply Weakness or Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチ付きポケモンの2つを選択します（1つしかない場合は1）。この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Choisissez 2 du Pokémon bancé de votre adversaire (1 s'il en a seulement 1). Cette attaque fait 10 dégâts à chacun de ces Pokémon. (N'appliquez pas la faiblesse ou la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 der Bankpokemon Ihres Gegners (1, wenn er oder sie nur 1 hat). Dieser Angriff schädigt jedes dieser Pokémon 10. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Elija 2 del Pokémon de banca de tu oponente (1 si solo tiene 1). Este ataque hace 10 daños a cada uno de esos Pokémon. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Scegli 2 del Pokemon in panchina del tuo avversario (1 se ha solo 1). Questo attacco fa 10 danni a ciascuno di quei Pokemon. (Non applicare debolezza o resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 do Pokémon bancado do seu oponente (1 se ele ou ela tiver apenas 1). Este ataque causa 10 danos a cada um desses Pokémon. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
