import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Golem",
         ja: "ゴーレム",
         fr: "Golem",
         de: "Golem",
         es: "Golem",
         it: "GOLEM",
         pt: "Golem",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [76],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Crystal Type",
            ja: "クリスタルタイプ",
            fr: "Type de cristal",
            de: "Kristalltyp",
            es: "Tipo de cristal",
            it: "Tipo di cristallo",
            pt: "Tipo de cristal",
          },
          effect: {
            en: "Whenever you attach a Grass, Fire, or Fighting basic Energy card from your hand to Golem, Golem's type (color) becomes the same as that type of Energy until the end of the turn.",
            ja: "手からゴーレムに草、火、または基本エネルギーカードとの戦いをするときはいつでも、ゴーレムのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base, du feu ou de la lutte de base de votre main à Golem, le type de Golem (couleur) devient le même que ce type d'énergie jusqu'à la fin du tour.",
            de: "Wenn Sie ein Gras, Feuer oder eine grundlegende Energiekarte von Ihrer Hand an Golem anbringen, wird Golems Typ (Farbe) bis zum Ende der Kurve mit dieser Art von Energie.",
            es: "Cada vez que adjunta un césped, fuego o lucha contra la tarjeta de energía básica de su mano a Golem, el tipo de Golem (color) se convierte en el mismo que ese tipo de energía hasta el final del turno.",
            it: "Ogni volta che attacchi un'erba, un fuoco o combatti la carta di energia di base dalla tua mano a Golem, il tipo di Golem (colore) diventa lo stesso di quel tipo di energia fino alla fine del turno.",
            pt: "Sempre que você prende uma grama, fogo ou combate a Cartão de Energia Básica da sua mão para Golem, o tipo de Golem (cor) se torna o mesmo que esse tipo de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Rock Throw",
            ja: "ロックスロー",
            fr: "Lancer du roche",
            de: "Felswurf",
            es: "Lanzamiento de roca",
            it: "Lancio di roccia",
            pt: "Arremesso de rochas",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Grass", "Fire", "Colorless"],
          name: {
            en: "Earth Bomb",
            ja: "地球爆弾",
            fr: "Earth Bomb",
            de: "Erdbombe",
            es: "Bomba de la tierra",
            it: "Bomba di terra",
            pt: "Bomba da terra",
          },
          effect: {
            en: "Golem does 20 damage to itself. This attack also does 10 damage to each Benched Pokemon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ゴーレムはそれ自体に20のダメージを与えます。この攻撃は、各ベンチポケモン（あなたと相手）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Golem fait 20 dégâts à lui-même. Cette attaque fait également 10 dégâts à chaque Pokémon bancé (le vôtre et celui de votre adversaire). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Golem schädigt sich 20. Dieser Angriff verursacht auch 10 Schäden an jedem Bank -Pokemon (Ihr und Ihrem Gegner). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Golem hace 20 daños a sí mismo. Este ataque también hace 10 daños a cada Pokémon en banca (el tuyo y el de tu oponente). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Golem fa 20 danni a se stesso. Questo attacco infligge anche 10 danni a ciascun Pokemon in panchina (il tuo e quello del tuo avversario). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Golem causa 20 danos a si mesmo. Esse ataque também causa 10 danos a cada Pokémon em banco (o seu e o seu oponente). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 4,

};
