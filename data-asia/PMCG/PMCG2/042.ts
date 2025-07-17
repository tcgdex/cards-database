import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Tauros",
         ja: "タウロス",
         fr: "Tauros",
         de: "Tauros",
         es: "Tauros",
         it: "Tauros",
         pt: "Tauros",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [128],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Stomp",
            ja: "踏みつけ",
            fr: "Piétiner",
            de: "Stomp",
            es: "Pisar muy fuerte",
            it: "Stomp",
            pt: "Stomp",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage; if tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño; Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 danni in più; Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 mais danos; Se as caudas, esse ataque causam 20 danos.",
          },

        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rampage",
            ja: "大暴れ",
            fr: "Carnage",
            de: "Rampage",
            es: "Alboroto",
            it: "Rampage",
            pt: "Tumulto",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each damage counter on Tauros. Flip a coin. If tails, Tauros is now Confused (after doing damage).",
            ja: "タウロスのダメージカウンターごとに20のダメージに加えて10ダメージを加えます。コインをひっくり返します。尾の場合、タウロスは（ダメージを与えた後）混乱しています。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Tauros. Retourner une pièce. Si Tails, Tauros est maintenant confus (après avoir causé des dommages).",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jeden Schadenschalter bei Tauros. Eine Münze drehen. Wenn Tails, ist Tauros jetzt verwirrt (nach Schaden).",
            es: "Hace 20 daños más 10 10 más de daño por cada contador de daños en Tauros. Voltea una moneda. Si Tails, Tauros ahora está confundido (después de hacer daño).",
            it: "Fa 20 danni più 10 danni in più per ciascun contatore di danni su Tauros. Capovolgi una moneta. Se le code, Tauros è ora confusa (dopo aver fatto danni).",
            pt: "Causa 20 danos mais 10 mais danos para cada contador de danos em Tauros. Vire uma moeda. Se caudas, Tauros agora está confuso (depois de causar danos).",
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
