import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra",
         ja: "キングドラ",
         fr: "Kingdra",
         de: "Kingdra",
         es: "Kingdra",
         it: "Kingdra",
         pt: "Kingdra",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Kingdra.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Kingdraに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Kingdra.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Kingdra, verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los ataques de los ataques, incluido el daño, se hagan a Kingdra.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Kingdra.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados a Kingdra.",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Water", "Water", "Water"],
          name: {
            en: "Dragon Tornado",
            ja: "ドラゴン・トルネード",
            fr: "Tornade de dragon",
            de: "Drachen Tornado",
            es: "Tornado de dragón",
            it: "Drago Tornado",
            pt: "Tornado de dragão",
          },
          effect: {
            en: "If this attack doesn't Knock Out the Defending Pokemon, and if there are any Pokemon on your opponent's Bench, choose 1 of them and switch it with the Defending Pokemon.",
            ja: "この攻撃が防御ポケモンをノックアウトしない場合、そして対戦相手のベンチにポケモンがある場合は、それらの1つを選択して、防御ポケモンで切り替えます。",
            fr: "Si cette attaque n'élimite pas le Pokémon en défense, et s'il y a des Pokémon sur le banc de votre adversaire, choisissez 1 d'entre eux et changez-le avec le Pokémon en défense.",
            de: "Wenn dieser Angriff das verteidigende Pokemon nicht ausschlägt und auf der Bank Ihres Gegners Pokémon vorhanden ist, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon.",
            es: "Si este ataque no noquea al Pokémon defensor, y si hay algún Pokémon en el banco de tu oponente, elija 1 de ellos y cambie con el Pokémon defensor.",
            it: "Se questo attacco non elimina il Pokemon in difesa e se ci sono Pokemon sulla panchina del tuo avversario, scegline 1 e cambialo con il Pokemon in difesa.",
            pt: "Se esse ataque não nocautear o Pokémon atual e se houver algum Pokémon no banco do seu oponente, escolha 1 deles e trocá -lo com o Pokémon defensivo.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
