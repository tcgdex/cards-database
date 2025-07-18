import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Masquerain",
         ja: "仮面舞踏会",
         fr: "Mascarain",
         de: "Masquerain",
         es: "Estafera",
         it: "Mascherain",
         pt: "Masquerain",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [284],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon.",
            ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon bancté.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokémon.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Silver Wind",
            ja: "銀風",
            fr: "Vent d'argent",
            de: "Silberwind",
            es: "Viento plateado",
            it: "Vento d'argento",
            pt: "Vento de prata",
          },
          effect: {
            en: "During your next turn, if an attack does damage to the Defending Pokemon (after applying Weakness and Resistance), that attack does 30 more damage.",
            ja: "次のターン中に、攻撃が防御ポケモンにダメージを与えた場合（脱力感と抵抗を適用した後）、その攻撃はさらに30のダメージを与えます。",
            fr: "Au cours de votre prochain tour, si une attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), cette attaque fait 30 dégâts supplémentaires.",
            de: "Wenn Sie in Ihrer nächsten Kurve ein Angriff auf das verteidigende Pokémon schämen (nach der Anwendung von Schwäche und Widerstand), verursacht dieser Angriff 30 weitere Schäden.",
            es: "Durante su próximo turno, si un ataque da daño al Pokémon defensor (después de aplicar debilidad y resistencia), ese ataque hace 30 daños más.",
            it: "Durante il turno successivo, se un attacco infligge danni al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), quell'attacco fa altri 30 danni.",
            pt: "Durante o seu próximo turno, se um ataque causar danos aos Pokémon defensores (após aplicar fraqueza e resistência), esse ataque causa mais 30 danos.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
