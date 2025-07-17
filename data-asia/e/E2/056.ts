import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmontop",
         ja: "ヒットモントップ",
         fr: "Hitmontop",
         de: "Hitmontop",
         es: "Hitmontop",
         it: "Hitmontop",
         pt: "Hitmontop",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [237],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Kick",
            ja: "ダブルキック",
            fr: "Coup de pied",
            de: "Double Kick",
            es: "Doble patada",
            it: "Doppio calcio",
            pt: "Chute duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Triple Spin",
            ja: "トリプルスピン",
            fr: "Triple spin",
            de: "Dreifacher Spin",
            es: "Triple giro",
            it: "Tripla rotazione",
            pt: "Giro triplo",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, switch Hitmontop with 1 of your Benched Pokemon, if any.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上のヘッドを手に入れた場合は、ベンチ付きポケモンを1つ持ってHitMontopを切り替えます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes. Si vous obtenez 2 têtes ou plus, changez Hitmontop avec 1 de votre pokemon banc, le cas échéant.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe. Wenn Sie 2 oder mehr Köpfe erhalten, wechseln Sie Hitmontop mit 1 Ihres Bank -Pokemon, falls vorhanden.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas. Si obtiene 2 o más cabezas, cambie HITMONTOP con 1 de su Pokémon de banca, si lo hay.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste. Se ottieni 2 o più teste, cambia HitMontop con 1 del tuo Pokemon in panchina, se presente.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças. Se você receber 2 ou mais cabeças, mude o Hitmontop com 1 do seu Pokémon em banco, se houver.",
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
