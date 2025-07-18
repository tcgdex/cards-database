import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Lanturn",
         ja: "Surge's Lanturn中t",
         fr: "Lt. Surge's Lanturn",
         de: "Lt. Surge's Lanturn",
         es: "Teniente Surge's Lanturn",
         it: "Tenente Lanturn di Surge",
         pt: "O tenente Surge's Lanturn",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [171],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Spark",
            ja: "スパーク",
            fr: "Étincelle",
            de: "Funke",
            es: "Chispa",
            it: "Scintilla",
            pt: "Fagulha",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 10 damage to it. (Don’t apply Weakness or Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 10 dégâts. (N'appliquez pas la faiblesse ou la résistance pour les Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 10. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Si tu oponente tiene algún Pokémon en banca, elija 1 de ellos y este ataque le da 10 daños. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegline 1 e questo attacco fa 10 danni ad esso. (Non applicare la debolezza o la resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 10 danos a ele. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
