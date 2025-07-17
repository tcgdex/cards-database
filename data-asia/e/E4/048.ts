import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Girafarig",
         ja: "Girafarig",
         fr: "Girafarig",
         de: "Girafarig",
         es: "Girafarig",
         it: "Girafarig",
         pt: "Girafarig",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [203],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Patch",
            ja: "エネルギーパッチ",
            fr: "Patch d'énergie",
            de: "Energy Patch",
            es: "Parche de energía",
            it: "Patch di energia",
            pt: "Adesivo de energia",
          },
          effect: {
            en: "Take a basic Energy card attached to 1 of your Pokemon and attach it to another of your Pokemon.",
            ja: "ポケモンの1つに取り付けられた基本的なエネルギーカードを取り、ポケモンのもう1つに取り付けます。",
            fr: "Prenez une carte d'énergie de base attachée à 1 de votre Pokémon et attachez-la à un autre de votre Pokémon.",
            de: "Nehmen Sie eine grundlegende Energiekarte, die an 1 Ihres Pokémons angebracht ist, und befestigen Sie sie an einem anderen Ihres Pokémon.",
            es: "Tome una tarjeta de energía básica unida a 1 de su Pokémon y adhiérase a otro de su Pokémon.",
            it: "Prendi una carta energetica di base collegata a 1 del tuo Pokemon e attaccalo a un altro del tuo Pokemon.",
            pt: "Pegue um cartão de energia básico conectado a 1 do seu Pokémon e prenda -o a outro de seu Pokémon.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Syncroblast",
            ja: "シンクロブラスト",
            fr: "Syncroblaste",
            de: "Syncroblast",
            es: "Sincroblast",
            it: "Syncroblast",
            pt: "Syncroblast",
          },
          effect: {
            en: "If Girafarig and the Defending Pokemon don't have the same number of Energy cards attached to them, this attack's base damage is 10 instead of 40.",
            ja: "Girafarigと防御ポケモンに同じ数のエネルギーカードが付いていない場合、この攻撃の基本ダメージは40ではなく10です。",
            fr: "Si Girafarig et le Pokémon en défense n'ont pas le même nombre de cartes d'énergie qui leur sont attachées, les dégâts de base de cette attaque sont de 10 au lieu de 40.",
            de: "Wenn Girafarig und das verteidigende Pokémon nicht die gleiche Anzahl von Energiekarten haben, beträgt der Grundschaden dieses Angriffs 10 anstelle von 40.",
            es: "Si Girafarig y el Pokémon defensor no tienen el mismo número de cartas de energía unidas a ellas, el daño base de este ataque es 10 en lugar de 40.",
            it: "Se Girafarig e il Pokemon in carica non hanno lo stesso numero di carte di energia allegate ad esse, il danno di base di questo attacco è 10 anziché 40.",
            pt: "Se o Girafarig e o Pokémon atual não tiverem o mesmo número de cartões de energia anexados a eles, o dano básico desse ataque é 10 em vez de 40.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
