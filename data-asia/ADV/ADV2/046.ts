import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Aggron ex",
         ja: "Aggron Ex",
         fr: "Aggron ex",
         de: "Aggron Ex",
         es: "Aggron ex",
         it: "Aggron Ex",
         pt: "Aggron ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 150,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "If the Defending Pokemon has any damage counters on it, this attack does 30 damage plus 30 more damage.",
            ja: "防衛ポケモンにダメージカウンターがある場合、この攻撃は30のダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense a des compteurs de dégâts dessus, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Schadenserzähler hat, verursacht dieser Angriff 30 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor tiene algún contador de daño, este ataque hace 30 daños más 30 daños más.",
            it: "Se il Pokemon in carica ha contatori di danni su di esso, questo attacco infligge 30 danni più 30 danni.",
            pt: "Se o Pokémon atual tiver algum contador de danos, esse ataque causará 30 danos mais 30 mais danos.",
          },
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Metal Surge",
            ja: "金属サージ",
            fr: "Surtension en métal",
            de: "Metallschub",
            es: "Sobretensión de metal",
            it: "Aumento del metallo",
            pt: "Surge de metal",
          },
          effect: {
            en: "Does 20 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンのそれぞれに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 20 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 20 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 20 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 20 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Causam 20 danos a cada um dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
