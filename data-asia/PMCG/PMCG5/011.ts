import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Weepinbell",
         ja: "エリカのweepinbell",
         fr: "Erika's Weepinbell",
         de: "Erikas Weepinbell",
         es: "Erika's Weepinbell",
         it: "Weepinbell di Erika",
         pt: "Weepinbell de Erika",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [70],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Drool",
            ja: "よだれ",
            fr: "Baver",
            de: "Sabbern",
            es: "Babear",
            it: "Sbavare",
            pt: "Baba",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Flytrap",
            ja: "FlyTrap",
            fr: "Male",
            de: "Flytrap",
            es: "Trampa",
            it: "Flytrap",
            pt: "Flytrap",
          },
          effect: {
            en: "Before doing damage, choose 1 of your opponent's Benched Pokemon and switch it with his or her Active Pokemon. This attack can't be used if your opponent has no Benched Pokemon.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、アクティブなポケモンで切り替えます。対戦相手にベンチポケモンがない場合、この攻撃は使用できません。",
            fr: "Avant de faire des dégâts, choisissez un des Pokémon bancés de votre adversaire et changez-le avec son Pokémon actif. Cette attaque ne peut pas être utilisée si votre adversaire n'a pas de pokemon banc.",
            de: "Bevor Sie Schaden anrichten, wählen Sie 1 des Pokémon Ihres Gegners und schalten Sie es mit seinem aktiven Pokémon. Dieser Angriff kann nicht verwendet werden, wenn Ihr Gegner kein Bank -Pokémon hat.",
            es: "Antes de hacer daño, elija 1 de los Pokémon de banca de su oponente y cíguelo con su Pokémon activo. Este ataque no se puede usar si tu oponente no tiene Pokémon en banca.",
            it: "Prima di fare danni, scegli 1 del Pokemon in panchina del tuo avversario e cambialo con il suo Pokemon attivo. Questo attacco non può essere usato se il tuo avversario non ha Pokemon in panchina.",
            pt: "Antes de causar danos, escolha 1 dos Pokémon bancos do seu oponente e trocá -lo com seu Pokémon ativo. Esse ataque não pode ser usado se seu oponente não tiver Pokemon em banco.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
