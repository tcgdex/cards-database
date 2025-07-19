import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Weezing",
         ja: "おしっこ",
         fr: "Faire de la pointe",
         de: "Weezing",
         es: "Weezing",
         it: "Weezing",
         pt: "Weezing",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [110],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Body Odor",
            ja: "体臭",
            fr: "Odeur corporelle",
            de: "Körpergeruch",
            es: "Olor corporal",
            it: "Odore del corpo",
            pt: "Odor corporal",
          },
          effect: {
            en: "As long as Weezing is the Active PokÃ©mon, put 1 damage counter on each of your opponent's PokÃ©mon that has any PokÃ©-Bodies between turns.",
            ja: "weezingがアクティブなポカモンである限り、ターンの間にポカンボディを持っている相手の各ポカモンに1つのダメージカウンターを1つのダメージカウンターに入れます。",
            fr: "Tant que le weezing est le poké actif, mettez 1 compteur de dégâts sur chacun des poké de votre adversaire qui a des poké-bodies entre les virages.",
            de: "Solange Weezing der aktive Poké Mon Mon ist, geben Sie 1 Schadenschalter auf die Poké Mon Ihres Gegners mit einem Poké-Gebiet zwischen den Kurven.",
            es: "Mientras Weezing sea el Poké Mon activo, coloque 1 contador de daño en cada uno de los pokh Mon de su oponente que tiene algún bollo entre giros.",
            it: "Finché Weezing è il poké attivo, metti 1 contatore di danni su ciascuno dei poké del tuo avversario che ha qualche poké-corpi tra i turni.",
            pt: "Enquanto o Weezing for o Poké Mon ativo, coloque 1 contador de danos em cada um dos poké de seu oponente que possui corpos de poké entre turnos.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Mist Attack",
            ja: "ミスト攻撃",
            fr: "Attaque de brouillard",
            de: "Nebelangriff",
            es: "Ataque de niebla",
            it: "Attacco di nebbia",
            pt: "Ataque de névoa",
          },
          effect: {
            en: "Does 10 damage to each of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chacun des pokémon de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 das Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei Pokemon del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um dos Pokémon do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Sludge Whirlpool",
            ja: "スラッジ渦",
            fr: "Tourbillon de boues",
            de: "Schlamm Whirlpool",
            es: "Remolino de lodo",
            it: "Whirlpool di fanghi",
            pt: "Lodo Whirlpool",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
