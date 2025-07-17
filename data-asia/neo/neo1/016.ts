import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Jumpluff",
         ja: "ジャンプラフ",
         fr: "Jumeau",
         de: "Jumpluff",
         es: "Jumpluff",
         it: "Jumpuff",
         pt: "JumPluff",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [189],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Powder",
            ja: "スリープパウダー",
            fr: "Poudre de sommeil",
            de: "Schlafpulver",
            es: "Polvo de sueño",
            it: "Polvere di sonno",
            pt: "Sono Powder",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Leech Seed",
            ja: "リーチシード",
            fr: "Graine de sangsue",
            de: "Blutegelsamen",
            es: "Semilla sanguijuela",
            it: "Seme di sanguisuga",
            pt: "Semente de sanguessuga",
          },
          effect: {
            en: "If this attack damages the Defending Pokemon (after applying Weakness and Resistance), remove 1 damage counter from Jumpluff, if it has any.",
            ja: "この攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、ジャンプラフから1つのダメージカウンターを削除します。",
            fr: "Si cette attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), retirez 1 compteur de dégâts de Jumpluff, s'il en a.",
            de: "Wenn dieser Angriff das verteidigende Pokémon schädigt (nach Auftragen von Schwäche und Widerstand), entfernen Sie 1 Schadenschalter aus Jumpluff, falls er welche hat.",
            es: "Si este ataque daña al Pokémon defensor (después de aplicar debilidad y resistencia), elimine 1 contador de daño de Jumpluff, si tiene alguno.",
            it: "Se questo attacco danneggia il Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), rimuovere 1 contatore di danni da Jumpuff, se ne ha.",
            pt: "Se esse ataque danificar o Pokémon defensivo (depois de aplicar fraqueza e resistência), remova 1 contador de danos do JumPluff, se houver algum.",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
