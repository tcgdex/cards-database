import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Ledian",
         ja: "軽いレディアン",
         fr: "Léger",
         de: "Leichte LEDIAN",
         es: "Ledeño ligero",
         it: "LEGGE LEDIAN",
         pt: "LEDIAN LUZ",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [166],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Flash Touch",
            ja: "フラッシュタッチ",
            fr: "Touche flash",
            de: "Flash Touch",
            es: "Toque flash",
            it: "Tocco flash",
            pt: "Toque flash",
          },
          effect: {
            en: "If you have any Benched Pokemon, switch 1 of them with Light Ledian. As long as that Pokemon is your Active Pokemon, it can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokemon Powers, and Trainer cards still happen.)",
            ja: "ベンチ付きポケモンがある場合は、Light Ledianで1つを切り替えます。そのポケモンがあなたのアクティブなポケモンである限り、それは眠り、混乱し、麻痺し、毒されることはできません。 （攻撃、ポケモンパワー、トレーナーカードの他のすべての効果はまだ発生しています。）",
            fr: "Si vous avez des pokemon bancés, changez 1 d'entre eux avec léger léger. Tant que ce Pokémon est votre Pokémon actif, il ne peut pas endormir, confus, paralysé ou empoisonné. (Tous les autres effets des attaques, des pouvoirs de Pokémon et des cartes d'entraînement se produisent toujours.)",
            de: "Wenn Sie ein Bank -Pokemon haben, wechseln Sie 1 mit leichten LEDIAN. Solange dieses Pokémon Ihr aktives Pokémon ist, kann es nicht schlafen, verwirrt, gelähmt oder vergiftet. (Alle anderen Auswirkungen von Angriffen, Pokemon -Kräften und Trainerkarten ereignen sich immer noch.)",
            es: "Si tiene algún Pokémon de banca, cambie 1 de ellos con Light Ledian. Mientras ese Pokémon sea tu Pokémon activo, no puede quedarse dormido, confundido, paralizado o envenenado. (Todos los demás efectos de ataques, poderes de Pokémon y cartas de entrenador aún ocurren).",
            it: "Se hai dei Pokemon in panchina, cambia 1 con LEGGE LEDIAN. Finché quel Pokemon è il tuo Pokemon attivo, non può essere addormentato, confuso, paralizzato o avvelenato. (Tutti gli altri effetti di attacchi, poteri di Pokemon e carte dell'allenatore si verificano ancora.)",
            pt: "Se você tiver algum Pokémon em banco, mude 1 deles com LEDIAN LEVEN. Enquanto esse Pokémon for seu Pokémon ativo, ele não pode ficar dormindo, confuso, paralisado ou envenenado. (Todos os outros efeitos de ataques, poderes de Pokemon e cartões de treinador ainda acontecem.)",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Comet Punch",
            ja: "彗星パンチ",
            fr: "Punch de comète",
            de: "Komet Punch",
            es: "Cometa",
            it: "Punch di comete",
            pt: "Cometa Punch",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
