import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Primeape",
         ja: "プライム",
         fr: "Primepape",
         de: "Primape",
         es: "Primapia",
         it: "Prima",
         pt: "Primeape",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [57],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Karate Chop",
            ja: "空手チョップ",
            fr: "Karaté Chop",
            de: "Karate Chop",
            es: "Karate Chop",
            it: "Carate Chop",
            pt: "Costeleta de karatê",
          },
          effect: {
            en: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
            ja: "この攻撃による損傷は、Primeapeの各ダメージカウンターで10倍に減少します。",
            fr: "Les dégâts de cette attaque sont réduits de 10 pour chaque compteur de dégâts sur Primeape.",
            de: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
            es: "El daño de este ataque se reduce en 10 por cada contador de daños en Primeape.",
            it: "Il danno da questo attacco è ridotto di 10 per ciascun contatore di danni su prima.",
            pt: "Os danos desse ataque são reduzidos em 10 para cada contador de danos no primeape.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Sudden Charge",
            ja: "突然の充電",
            fr: "Accusation soudaine",
            de: "Plötzliche Gebühr",
            es: "Carga repentina",
            it: "Carica improvvisa",
            pt: "Carga repentina",
          },
          effect: {
            en: "Primeape does 10 damage to itself. Then, your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any.",
            ja: "Primeapeはそれ自体に10ダメージを与えます。次に、対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
            fr: "Primeape fait 10 dégâts à lui-même. Ensuite, votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant.",
            de: "Primape schädigt sich 10. Dann wechselt Ihr Gegner das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden.",
            es: "Primeape hace 10 daños a sí mismo. Entonces, tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno.",
            it: "Primeape fa 10 danni a se stesso. Quindi, il tuo avversario cambia il Pokemon in difesa con 1 dei suoi Pokemon in panchina, se presente.",
            pt: "Primeape causa 10 danos a si mesmo. Em seguida, seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

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
