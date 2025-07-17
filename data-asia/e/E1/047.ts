import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Chansey",
         ja: "チャンジー",
         fr: "Chansey",
         de: "Chansey",
         es: "Chansey",
         it: "Chansey",
         pt: "Chansey",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [113],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bind Wound",
            ja: "傷を結合します",
            fr: "Lier la blessure",
            de: "Wunde binden",
            es: "Atar la herida",
            it: "Legare ferita",
            pt: "Vincular a ferida",
          },
          effect: {
            en: "Flip a coin. If heads, remove 2 damage counters from 1 of your Pokemon (1 if it has only 1).",
            ja: "コインをひっくり返します。ヘッドの場合、ポケモンの1つから2つのダメージカウンターを削除します（1つしかない場合）。",
            fr: "Retourner une pièce. Si les têtes, retirez 2 compteurs de dégâts de 1 de votre Pokémon (1 s'il n'en a que 1).",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entfernen Sie 2 Schadenszähler von 1 Ihres Pokémon (1, wenn es nur 1 hat).",
            es: "Voltea una moneda. Si se dirige, retire 2 contadores de daño de 1 de su Pokémon (1 si solo tiene 1).",
            it: "Capovolgi una moneta. Se le teste, rimuovi 2 contatori di danno da 1 del tuo Pokemon (1 se ha solo 1).",
            pt: "Vire uma moeda. Se as cabeças, remova 2 contadores de danos de 1 do seu Pokémon (1 se tiver apenas 1).",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Dogpile",
            ja: "ドッグパイル",
            fr: "Pile de chien",
            de: "Dogpile",
            es: "Perdpile",
            it: "Dogpile",
            pt: "Dogpile",
          },
          effect: {
            en: "Count the number of Pokemon on your bench. This attack does 10 times that number of damage to the Defending Pokemon, and Chansey does 10 times that number of damage to itself.",
            ja: "ベンチにポケモンの数を数えます。この攻撃は、ディフェンディングポケモンにその数のダメージを10倍も行い、チャンジーはそれ自体にその10倍のダメージを与えます。",
            fr: "Comptez le nombre de Pokémon sur votre banc. Cette attaque fait 10 fois ce nombre de dégâts au Pokémon en défense, et Chansey fait 10 fois ce nombre de dégâts à lui-même.",
            de: "Zählen Sie die Anzahl der Pokemon auf Ihrer Bank. Dieser Angriff schadet das 10 -fache der Anzahl der Schäden an dem verteidigenden Pokemon, und Chansey schadet die Zahl von Schäden an sich selbst.",
            es: "Cuente el número de Pokémon en su banco. Este ataque hace 10 veces ese número de daños al Pokémon defensor, y Chansey hace 10 veces ese número de daño a sí mismo.",
            it: "Conta il numero di Pokemon in panchina. Questo attacco fa 10 volte quel numero di danni al Pokemon in carica e Chansey fa 10 volte quel numero di danni a se stesso.",
            pt: "Conte o número de Pokémon em seu banco. Esse ataque causa 10 vezes o número de danos ao pokemon defensor, e Chansey faz 10 vezes esse número de danos a si mesmo.",
          },
        },
      ],

      retreat: 2,

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
