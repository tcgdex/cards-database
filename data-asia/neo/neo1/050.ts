import {Card} from "../../../interfaces"
import Set from "../neo1"

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

      rarity: "Common",
      category: "Pokemon",
      dexId: [95],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Screech",
            ja: "金切り声",
            fr: "Hurler",
            de: "Kreischen",
            es: "Chillido",
            it: "Strillo",
            pt: "Screech",
          },
          effect: {
            en: "Until the end of your next turn, if an attack damages the Defending Pokemon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokemon.",
            ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
            fr: "Jusqu'à la fin de votre prochain tour, si une attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), cette attaque fait 20 dommages supplémentaires au Pokémon en défense.",
            de: "Wenn ein Angriff das verteidigende Pokémon schädigt (nach der Anwendung von Schwäche und Widerstand), bis zum Ende Ihrer nächsten Kurve schadet dieser Angriff 20 weitere Schäden am verteidigenden Pokémon.",
            es: "Hasta el final de su próximo turno, si un ataque daña al Pokémon defensor (después de aplicar debilidad y resistencia), ese ataque hace 20 daños más al Pokémon defensor.",
            it: "Fino alla fine del turno successivo, se un attacco danneggia il Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), quell'attacco fa altri 20 danni al Pokemon in difesa.",
            pt: "Até o final do seu próximo turno, se um ataque danificar o Pokémon atual (depois de aplicar fraqueza e resistência), esse ataque causa mais 20 danos ao Pokémon defensivo.",
          },
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on Onix.",
            ja: "Onixのダメージカウンターごとに10のダメージと10ダメージがさらに10件のダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur ONIX.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf ONIX.",
            es: "Hace 10 daños más 10 10 más de daño por cada contador de daños en Onix.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Onix.",
            pt: "10 danos mais 10 mais danos para cada contador de danos no Onix.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
