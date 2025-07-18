import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Tropius",
         ja: "トロピウス",
         fr: "Tropius",
         de: "Tropius",
         es: "Tropio",
         it: "Tropio",
         pt: "Tropius",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [357],
      hp: 80,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Fruition",
            ja: "結実",
            fr: "Réalisation",
            de: "Früchte",
            es: "Fruición",
            it: "Fruizione",
            pt: "Fruição",
          },
          effect: {
            en: "Move 1 Energy card attached to Tropius to another of your Pokemon and remove 4 damage counters from that Pokemon (all if there are less than 4).",
            ja: "トロピウスに取り付けられた1つのエネルギーカードを別のポケモンに移動し、そのポケモンから4つのダメージカウンターを削除します（すべてが4未満の場合）。",
            fr: "Déplacez 1 carte d'énergie attachée à Tropius à un autre de votre Pokémon et retirez 4 compteurs de dégâts de ce Pokémon (tout s'il y en a moins de 4).",
            de: "Bewegen Sie 1 Energiekarte an Tropius auf ein anderes Pokémon und entfernen Sie 4 Schadenszähler von diesem Pokémon (alle, wenn es weniger als 4 gibt).",
            es: "Mueva 1 tarjeta de energía unida a Tropius a otro de su Pokémon y retire 4 contadores de daño de ese Pokémon (todo si hay menos de 4).",
            it: "Sposta 1 carta di energia collegata a Tropio a un'altra del tuo Pokemon e rimuovi 4 contatori di danno da quel Pokemon (tutto se ce ne sono meno di 4).",
            pt: "Mova 1 cartão de energia preso a Tropius a outro Pokémon e remova 4 contadores de danos desse Pokémon (tudo se houver menos de 4).",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Gust",
            ja: "突風",
            fr: "Rafale",
            de: "Böe",
            es: "Ráfaga",
            it: "Raffica",
            pt: "Rajada",
          },
          damage: 20,
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
