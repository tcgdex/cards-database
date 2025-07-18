import {Card} from "../../../interfaces"
import Set from "../PCG1"

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

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [128],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Knock Over",
            ja: "ノックオーバー",
            fr: "Renverser",
            de: "Umwerfen",
            es: "Derribar",
            it: "Knocking Over",
            pt: "Bate",
          },
          effect: {
            en: "You may discard any Stadium card in play.",
            ja: "プレイ中のスタジアムカードを捨てることができます。",
            fr: "Vous pouvez jeter n'importe quelle carte de stade en jeu.",
            de: "Sie können jede Stadionkarte im Spiel verwerfen.",
            es: "Puede descartar cualquier carta del estadio en juego.",
            it: "Puoi scartare qualsiasi carta dello stadio in gioco.",
            pt: "Você pode descartar qualquer carta do estádio em jogo.",
          },
          damage: 10,
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
            en: "Does 20 damage plus 10 more damage for each damage counter on Tauros. After doing damage, flip a coin. If tails, Tauros is now Confused.",
            ja: "タウロスのダメージカウンターごとに20のダメージに加えて10ダメージを加えます。ダメージを与えた後、コインをひっくり返します。尾の場合、タウロスは混乱しています。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Tauros. Après avoir fait des dégâts, retournez une pièce. Si Tails, Tauros est maintenant confus.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jeden Schadenschalter bei Tauros. Nach dem Schaden eine Münze drehen. Wenn Schwänze, ist Tauros jetzt verwirrt.",
            es: "Hace 20 daños más 10 10 más de daño por cada contador de daños en Tauros. Después de hacer daño, voltea una moneda. Si Tails, Tauros ahora está confundido.",
            it: "Fa 20 danni più 10 danni in più per ciascun contatore di danni su Tauros. Dopo aver fatto danni, capovolgi una moneta. Se le code, Tauros è ora confusa.",
            pt: "Causa 20 danos mais 10 mais danos para cada contador de danos em Tauros. Depois de causar danos, vire uma moeda. Se caudas, Tauros agora está confuso.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
