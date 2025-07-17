import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Slowbro",
         ja: "スローブロ",
         fr: "Slowbro",
         de: "Slowbro",
         es: "Slowbro",
         it: "Slowbro",
         pt: "Slowbro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [80],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dense Body",
            ja: "濃い体",
            fr: "Corps dense",
            de: "Dichter Körper",
            es: "Cuerpo denso",
            it: "Corpo denso",
            pt: "Corpo denso",
          },
          effect: {
            en: "Any damage done to Slowbro by attacks from Basic Pokmon (excluding Baby Pokmon) is reduced by 20.",
            ja: "Basic Pokemon（Baby Pokemonを除く）からの攻撃によってSlowbroに与えられた損害は20倍に減少します。",
            fr: "Tout dommage causé à Slowbro par les attaques de Pokémon de base (à l'exclusion du bébé Pokémon) est réduit de 20.",
            de: "Alle Schäden an Slowbro durch Angriffe von Basic -Pokémon (ohne Babypokemon) werden um 20 reduziert.",
            es: "Cualquier daño hecho a Slowbro por ataques de Pokémon básico (excluyendo Pokémon Baby) se reduce en 20.",
            it: "Qualsiasi danno arrecato a Slowbro dagli attacchi di Pokemon di base (esclusi i Pokemon per bambini) è ridotto di 20.",
            pt: "Qualquer dano causado a Slowbro por ataques de Pokemon básico (excluindo o Pokémon para bebês) é reduzido em 20.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Energy Cannon",
            ja: "エネルギー大砲",
            fr: "Canon d'énergie",
            de: "Energiekanone",
            es: "Cañón de energía",
            it: "Cannone energetico",
            pt: "Canhão de energia",
          },
          effect: {
            en: "This attack does 30 damage plus 10 more damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way.",
            ja: "この攻撃は、スローブロに付着した各エネルギーに対して30のダメージと10ダメージを10件以上ダメージしますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque énergie attachée à Slowbro, mais pas utilisée pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
            de: "Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jede an Slowbro angeschlossene Energie, aber es wird nicht verwendet, die Energiekosten dieses Angriffs zu bezahlen. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Este ataque hace 30 daños más 10 daños más por cada energía unida a Slowbro pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Questo attacco infligge 30 danni più 10 danni per ogni energia attaccata a Slowbro ma non utilizzato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Esse ataque causa 30 danos mais 10 mais danos a cada energia ligada ao SlowBro, mas não é usado para pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
