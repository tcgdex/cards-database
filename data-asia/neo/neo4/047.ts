import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Raichu",
         ja: "輝くライチュ",
         fr: "Brillant Raichu",
         de: "Shining Raichu",
         es: "Raichu brillante",
         it: "Shining Raichu",
         pt: "Brilhante Raichu",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Water", "Water"],
          name: {
            en: "Thundersquall",
            ja: "サンダースコール",
            fr: "Thundersquall",
            de: "Thundersquall",
            es: "Shundersquall",
            it: "Thundersquall",
            pt: "Thundersquall",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 10 damage to that Pokemon for each Water Energy attached to Shining Raichu. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合、そのうち1つを選択してください。この攻撃は、輝くライチュに付着した各水エネルギーに対してそのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque fait 10 dégâts à ce Pokémon pour chaque énergie d'eau attachée à Raichu brillant. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt dieses Pokémon für jede Wasserergie, die an Shining Raichu angebracht ist. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, elija 1 de ellos y este ataque hace 10 daños a ese Pokémon por cada energía de agua unida a Raichu brillante. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegline 1 e questo attacco fa 10 danni a quel Pokemon per ogni energia idrica attaccata a Raichu splendente. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 10 danos a esse Pokémon para cada energia da água ligada a Raichu brilhante. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
