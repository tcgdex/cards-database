import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Seaking",
         ja: "航海",
         fr: "Coulant",
         de: "Seckung",
         es: "Pasta",
         it: "Seaking",
         pt: "Seaking",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Triple Breach",
            ja: "トリプル違反",
            fr: "Triple violation",
            de: "Dreifache Verstöße",
            es: "Triple violación",
            it: "Tripla violazione",
            pt: "Brecha tripla",
          },
          effect: {
            en: "Choose 3 of your opponent's Pokemon. This attack does 10 damage to each of those Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの3つを選択してください。この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 3 du Pokémon de votre adversaire. Cette attaque fait 10 dégâts à chacun de ces Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 3 des Pokémon Ihres Gegners. Dieser Angriff schädigt jedes dieser Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 3 de los Pokémon de tu oponente. Este ataque hace 10 daños a cada uno de esos Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 3 del Pokemon del tuo avversario. Questo attacco fa 10 danni a ciascuno di quei Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 3 do Pokémon do seu oponente. Este ataque causa 10 danos a cada um desses Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rend",
            ja: "レンド",
            fr: "Déchirer",
            de: "Zerreißen",
            es: "Desgarrar",
            it: "Rend",
            pt: "Rend",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, this attack does 30 damage plus 20 more damage.",
            ja: "防御するポケモンがすでにダメージカウンターを持っている場合、この攻撃は30のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, verursacht dieser Angriff 30 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, este ataque hace 30 daños más 20 más de daño.",
            it: "Se il Pokemon in carica ha già contatori di danno, questo attacco infligge 30 danni più 20 danni.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, esse ataque causará 30 danos mais 20 danos.",
          },
        },
      ],


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
