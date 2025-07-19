import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Mightyena",
         ja: "マイティエナ",
         fr: "Puissant",
         de: "Mightyena",
         es: "Mightyena",
         it: "Potente",
         pt: "Mightyena",
      },


      category: "Pokemon",
      dexId: [262],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Plunder",
            ja: "略奪",
            fr: "Pillage",
            de: "Plunder",
            es: "Saquear",
            it: "Saccheggiare",
            pt: "Pilhagem",
          },
          effect: {
            en: "Before doing damage, discard all Trainer cards attached to the Defending Pokemon.",
            ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
            fr: "Avant de faire des dégâts, jetez toutes les cartes d'entraîner attachées au Pokémon en défense.",
            de: "Bevor Sie Schaden anrichten, entsorgen Sie alle Trainerkarten, die an das verteidigende Pokémon angeschlossen sind.",
            es: "Antes de hacer daño, deseche todas las tarjetas de entrenador adjuntas al Pokémon defensor.",
            it: "Prima di fare danni, scartare tutte le carte dell'allenatore collegate al Pokemon in carica.",
            pt: "Antes de causar danos, descarte todos os cartões de treinador anexados ao Pokémon atual.",
          },
          damage: 30,
        },
        {
          cost: ["Darkness", "Darkness", "Colorless"],
          name: {
            en: "Dark Burst",
            ja: "暗いバースト",
            fr: "Éclat sombre",
            de: "Dunkler Ausbruch",
            es: "Estallido oscuro",
            it: "Scoppio oscuro",
            pt: "Explosão escura",
          },
          effect: {
            en: "If 82 is in play, this attack does 50 damage plus 20 more damage.",
            ja: "82が再生中の場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
            fr: "Si 82 est en jeu, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn 82 im Spiel ist, verursacht dieser Angriff 50 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si 82 está en juego, este ataque hace 50 daños más 20 más de daño.",
            it: "Se 82 è in gioco, questo attacco infligge 50 danni più 20 danni in più.",
            pt: "Se 82 estiver em jogo, esse ataque causará 50 danos mais 20 mais danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
