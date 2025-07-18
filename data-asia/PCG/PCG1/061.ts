import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Onix",
         ja: "onix",
         fr: "Onix",
         de: "Onix",
         es: "Onix",
         it: "Onix",
         pt: "Onix",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [95],
      hp: 80,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Rock Throw",
            ja: "ロックスロー",
            fr: "Lancer du roche",
            de: "Felswurf",
            es: "Lanzamiento de roca",
            it: "Lancio di roccia",
            pt: "Arremesso de rochas",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Tunneling",
            ja: "トンネリング",
            fr: "Tunneling",
            de: "Tunneling",
            es: "Túnel",
            it: "Tunneling",
            pt: "Tunelamento",
          },
          effect: {
            en: "Choose up to 2 of your opponent's Benched Pokemon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.) Onix can't attack during your next turn.",
            ja: "対戦相手のベンチ付きポケモンを最大2つ選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Onixは次のターン中に攻撃できません。",
            fr: "Choisissez jusqu'à 2 des Pokémon bancés de votre adversaire. Cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) ONIX ne peut pas attaquer pendant votre prochain tour.",
            de: "Wählen Sie bis zu 2 des Benched -Pokemon Ihres Gegners. Dieser Angriff schädigt jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bank -Pokémon an.) Onix kann in Ihrer nächsten Kurve nicht angreifen.",
            es: "Elija hasta 2 de los Pokémon de banca de tu oponente. Este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los Pokémon de banca). Onix no puede atacar durante su próximo turno.",
            it: "Scegli fino a 2 del Pokemon in panchina del tuo avversario. Questo attacco fa 10 danni a ciascuno di essi. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Onix non può attaccare durante il tuo prossimo turno.",
            pt: "Escolha até 2 dos Pokémon com bancos do seu oponente. Este ataque causa 10 danos a cada um deles. (Não aplique fraqueza e resistência ao Pokemon em bancada.) O Onix não pode atacar durante o próximo turno.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
