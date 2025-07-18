import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Beedrill",
         ja: "beedrill",
         fr: "Beedrill",
         de: "Beedrill",
         es: "Beedrill",
         it: "Beedrill",
         pt: "Beedrill",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Link Needle",
            ja: "リンク針",
            fr: "Aiguille de liaison",
            de: "Linknadel",
            es: "Aguja de enlace",
            it: "Colleghi ago",
            pt: "Link agulha",
          },
          effect: {
            en: "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one) you have in play.",
            ja: "この攻撃は、50のダメージと、プレイ中のビードリル（これを除く）ごとに30ダメージを与えます。",
            fr: "Cette attaque fait 50 dégâts plus 30 dégâts supplémentaires pour chaque abri (à l'exclusion de celui-ci) que vous avez en jeu.",
            de: "Dieser Angriff verursacht 50 Schäden plus 30 weitere Schäden für jeden Beedrill (ohne diese), die Sie im Spiel haben.",
            es: "Este ataque causa 50 daños más 30 más de daño por cada beedrill (excluyendo este) que tienes en juego.",
            it: "Questo attacco infligge 50 danni più 30 danni per ogni beedrill (escluso questo) che hai in gioco.",
            pt: "Este ataque causa 50 danos mais 30 mais danos a cada Beedrill (excluindo este) que você tem em jogo.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
