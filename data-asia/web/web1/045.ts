import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Articuno",
         ja: "articuno",
         fr: "Articuno",
         de: "Articuno",
         es: "Articuno",
         it: "Articuno",
         pt: "Articuno",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [144],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Diamond Dust",
            ja: "ダイヤモンドダスト",
            fr: "Poussière de diamant",
            de: "Diamantstaub",
            es: "Polvo de diamante",
            it: "Polvere di diamante",
            pt: "Diamante Poeira",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed, and this attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは麻痺し、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé, et cette attaque fait 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokémon jetzt gelähmt, und dieser Angriff schädigt 10 Pokemon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado, y este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato e questo attacco fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está paralisado, e esse ataque causa 10 danos a cada um dos Pokémon com bancada do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

};
