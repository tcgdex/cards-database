import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Ninetales - 072/128",
         ja: "ninetales -072/128",
         fr: "Ninetales - 072/128",
         de: "Ninetales - 072/128",
         es: "Ninetales - 072/128",
         it: "NINETALES - 072/128",
         pt: "NineTales - 072/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Mislead",
            ja: "誤解を招く",
            fr: "Tromper",
            de: "Irreführen",
            es: "Engañar",
            it: "Indurre in errore",
            pt: "Enganar",
          },
          effect: {
            en: "Flip 2 coins. If either of them is heads, the Defending Pokemon is now Confused.",
            ja: "2つのコインをフリップします。それらのいずれかがヘッドである場合、防御するポケモンは今混乱しています。",
            fr: "Flip 2 pièces. Si l'un ou l'autre fait des têtes, le Pokémon en défense est maintenant confus.",
            de: "2 Münzen umdrehen. Wenn einer von ihnen Köpfe ist, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Flip 2 monedas. Si cualquiera de ellos es cabezas, el Pokémon defensor ahora está confundido.",
            it: "Flip 2 monete. Se uno di essi è testa, il Pokemon in difesa è ora confuso.",
            pt: "Flip 2 moedas. Se qualquer um deles estiver na cabeça, o Pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Ethereal Flame",
            ja: "エーテルの炎",
            fr: "Flamme éthérée",
            de: "Ätherische Flamme",
            es: "Llama etérea",
            it: "Fiamma eterea",
            pt: "Chama etérea",
          },
          effect: {
            en: "Discard all Fire Energy cards attached to Ninetales. This attack does 30 damage plus 20 more damage for each card discarded this way.",
            ja: "ニネタールに取り付けられたすべての消防符型カードを廃棄します。この攻撃は、この方法で廃棄された各カードに対して30のダメージと20のダメージをもたらします。",
            fr: "Jeter toutes les cartes d'énergie de feu attachées à Ninetales. Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque carte jetée de cette façon.",
            de: "Entsorgen Sie alle an Ninetales befestigten Brandenergiekarten. Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jede auf diese Weise verworfene Karte.",
            es: "Deseche todas las cartas de energía de fuego unidas a Ninetales. Este ataque hace 30 daños más 20 más de daño por cada carta descartada de esta manera.",
            it: "Scartare tutte le carte di energia antincendio attaccate a Ninetales. Questo attacco infligge 30 danni più 20 danni in più per ciascuna carta scartata in questo modo.",
            pt: "Descarte todos os cartões de energia de incêndio anexados a Ninetales. Este ataque causa 30 danos mais 20 mais danos para cada carta descartada dessa maneira.",
          },
        },
      ],

      retreat: 1,

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
