import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Primeape (Delta Species)",
         ja: "プライム（デルタ種）",
         fr: "Primeape (espèces delta)",
         de: "Primape (Delta -Arten)",
         es: "Primeape (especie delta)",
         it: "Primaepe (Delta Species)",
         pt: "Primeape (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [57],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Wreck",
            ja: "難破船",
            fr: "Détruire",
            de: "Wrack",
            es: "Naufragio",
            it: "Relitto",
            pt: "Naufrágio",
          },
          effect: {
            en: "If there is any Stadium card in play, this attack does 30 damage plus 30 more damage. Discard that Stadium card.",
            ja: "スタジアムカードがプレイされている場合、この攻撃は30ダメージに加えて30ダメージを与えます。そのスタジアムカードを捨ててください。",
            fr: "S'il y a une carte de stade en jeu, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires. Jeter cette carte de stade.",
            de: "Wenn es eine Stadionkarte im Spiel gibt, verursacht dieser Angriff 30 Schaden zuzüglich 30 weitere Schäden. Verwerfen Sie diese Stadionkarte.",
            es: "Si hay alguna carta del estadio en el juego, este ataque hace 30 daños más 30 daños más. Deseche esa tarjeta del estadio.",
            it: "Se c'è una carta stadio in gioco, questo attacco infligge 30 danni più 30 danni. Scartare quella carta dello stadio.",
            pt: "Se houver alguma carta de estádio em jogo, esse ataque causará 30 danos mais mais 30 danos. Descarte esse cartão do estádio.",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Flames of Rage",
            ja: "怒りの炎",
            fr: "Flammes de rage",
            de: "Flammen der Wut",
            es: "Llamas de ira",
            it: "Fiamme di rabbia",
            pt: "Chamas de raiva",
          },
          effect: {
            en: "Discard 2 Energy attached to Primeape. This attack does 10 damage plus 20 more damage for each damage counter on Primeape.",
            ja: "プライムに取り付けられた2つのエネルギーを捨てます。この攻撃は、Primeapeのダメージカウンターごとに10ダメージに加えて20のダメージを与えます。",
            fr: "Jetez 2 énergie attachée à Primeape. Cette attaque fait 10 dégâts plus 20 dégâts supplémentaires pour chaque compteur de dégâts sur Primeape.",
            de: "2 Energie entsorgen, die an Primape gebunden ist. Dieser Angriff verursacht 10 Schäden plus 20 weitere Schäden für jeden Schadenschalter auf Primape.",
            es: "Deseche 2 energía unida a Primeape. Este ataque hace 10 daños más 20 más de daño por cada contador de daño en Primeape.",
            it: "Scartare 2 energia attaccata a prima. Questo attacco infligge 10 danni più 20 danni in più per ciascun contatore di danni su Primeape.",
            pt: "Descarte 2 energia ligada ao primeape. Este ataque causa 10 danos mais 20 mais danos para cada contador de danos no primeape.",
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
