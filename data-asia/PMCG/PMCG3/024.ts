import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu",
         ja: "ライチュ",
         fr: "Raichu",
         de: "Raichu",
         es: "Raichu",
         it: "Raichu",
         pt: "Raichu",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 90,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
          name: {
            en: "Gigashock",
            ja: "ギガショック",
            fr: "Gigashock",
            de: "Gigashock",
            es: "Gigashock",
            it: "Gigascine",
            pt: "Gigashock",
          },
          effect: {
            en: "Choose 3 of your opponent's Benched Pokemon and this attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.) If your opponent has fewer than 3 Benched Pokemon, do the damage to each of them.",
            ja: "対戦相手のベンチポケモンの3つを選択すると、この攻撃はそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）相手が3つ未満のベンチポケモンを持っている場合、それぞれにダメージを与えます。",
            fr: "Choisissez 3 des pokémon bancés de votre adversaire et cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Si votre adversaire a moins de 3 Pokémon bancés, faites les dommages à chacun d'eux.",
            de: "Wählen Sie 3 des Bankpokémon Ihres Gegners und dieser Angriff schädigt jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.) Wenn Ihr Gegner weniger als 3 Pokémon mit Bank aufweist, beschädigen Sie sie.",
            es: "Elija 3 de los Pokémon de banca de su oponente y este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los Pokémon de banca). Si tu oponente tiene menos de 3 Pokémon de banca, haga el daño a cada uno de ellos.",
            it: "Scegli 3 dei Pokemon in panchina del tuo avversario e questo attacco fa 10 danni a ciascuno di essi. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Se il tuo avversario ha meno di 3 Pokemon in panchina, fai il danno a ciascuno di essi.",
            pt: "Escolha 3 dos Pokémon com bancos do seu oponente e este ataque causa 10 danos a cada um deles. (Não aplique fraqueza e resistência ao Pokémon em banco.) Se o seu oponente tiver menos de três Pokémon em banco, faça o dano a cada um deles.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
