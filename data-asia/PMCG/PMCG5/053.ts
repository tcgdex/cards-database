import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Golem",
         ja: "ブロックのゴーレム",
         fr: "Golem de Brock",
         de: "Brocks Golem",
         es: "Golem de Brock",
         it: "Brock's Golem",
         pt: "Golem de Brock",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [76],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
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
            en: "If your opponent has any Benched Pokemon, choose up to 3 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合は、最大3つのポケモンを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des Pokémon bancés, choisissez jusqu'à 3 d'entre eux. Cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie bis zu 3 davon. Dieser Angriff schädigt jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, elija hasta 3 de ellos. Este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegli fino a 3 di loro. Questo attacco fa 10 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha até 3 deles. Este ataque causa 10 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Fissure",
            ja: "亀裂",
            fr: "Fissure",
            de: "Spalt",
            es: "Fisura",
            it: "Fessura",
            pt: "Fissura",
          },
          damage: 50,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "normal",
        },
      ],
};
