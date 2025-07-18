import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Whiscash",
         ja: "ウィスカッシュ",
         fr: "Mourir",
         de: "Whiscash",
         es: "Whiscash",
         it: "Whiscash",
         pt: "Whiscash",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [340],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Raging Tremble",
            ja: "荒れ狂う震え",
            fr: "Trember",
            de: "Raging zittern",
            es: "Temblar furiosa",
            it: "Tremo di rabbia",
            pt: "Raging Tremble",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage for each damage counter on Whiscash to each Defending Pokemon. If tails, this attack does 10 damage for each damage counter on Whiscash to the Defending Pokemon.",
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は、各防御ポケモンに対してウィスカッシュで各ダメージカウンターに対して10ダメージを与えます。テールの場合、この攻撃は、防御ポケモンのウィスカッシュで各ダメージカウンターに対して10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 10 dégâts pour chaque compteur de dégâts sur Whiscash à chaque Pokémon en défense. Si Tails, cette attaque fait 10 dégâts pour chaque compteur de dégâts sur Whiscash au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn dieser Angriff für jeden Schadensschalter für jeden verteidigenden Pokémon 10 Schaden zufügt. Wenn Schwänze dieser Angriff für jeden Schadensschalter auf dem Titel auf das verteidigende Pokémon 10 Schaden zufügen.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños por cada contador de daño en Whiscash a cada Pokémon defensor. Si Tails, este ataque hace 10 daños por cada contador de daño en Whiscash al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni per ciascun contatore di danni su Whiscash a ciascun Pokemon in difesa. Se le code, questo attacco infligge 10 danni per ciascun contatore di danni su Whiscash al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada contador de danos em Whishash a cada Pokémon defensivo. Se as caudas, esse ataque causará 10 danos a cada contador de danos em Whiscash ao pokemon defensor.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Dwindling Wave",
            ja: "波の減少",
            fr: "Vague de déclin",
            de: "Schwindende Welle",
            es: "Ola disminuida",
            it: "Onda in diminuzione",
            pt: "Onda cada vez menor",
          },
          effect: {
            en: "Does 70 damage minus 10 damage for each damage counter on Whiscash.",
            ja: "Whiscashのダメージカウンターごとに70のダメージを引いた10ダメージを引いた。",
            fr: "Fait 70 dégâts moins 10 dégâts pour chaque compteur de dégâts sur Whiscash.",
            de: "Fügt 70 Schäden minus 10 Schäden für jeden Schadenschalter auf whiscash.",
            es: "Hace 70 daños menos 10 daños por cada contador de daño en Whiscash.",
            it: "Fa 70 danni meno 10 danni per ciascun contatore di danni su Whiscash.",
            pt: "70 danos menos 10 danos para cada balcão de danos em Whiscash.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
