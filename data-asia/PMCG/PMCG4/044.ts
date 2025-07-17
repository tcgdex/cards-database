import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Machamp",
         ja: "暗いマチャンプ",
         fr: "Dark Machamp",
         de: "Dunkler Machamp",
         es: "Machamp Dark",
         it: "Machamp scuro",
         pt: "Machamp escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Mega Punch",
            ja: "メガパンチ",
            fr: "Mega Punch",
            de: "Mega Punch",
            es: "Mega Punch",
            it: "Mega pugno",
            pt: "Mega soco",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
          name: {
            en: "Fling",
            ja: "逃げる",
            fr: "Jeter",
            de: "Schleudern",
            es: "Arrojar",
            it: "Lancia",
            pt: "Arremesso",
          },
          effect: {
            en: "Your opponent shuffles his or her Active Pokemon and all cards attached to it into his or her deck. This attack can't be used if your opponent has no Benched Pokemon.",
            ja: "あなたの対戦相手は彼または彼女のアクティブなポケモンとそれに取り付けられたすべてのカードを彼または彼女のデッキにシャッフルします。対戦相手にベンチポケモンがない場合、この攻撃は使用できません。",
            fr: "Votre adversaire mélange son pokemon actif et toutes les cartes qui y sont attachées dans son deck. Cette attaque ne peut pas être utilisée si votre adversaire n'a pas de pokemon banc.",
            de: "Dein Gegner schlurft sein aktives Pokémon und alle Karten, die an sein Deck angeschlossen sind. Dieser Angriff kann nicht verwendet werden, wenn Ihr Gegner kein Bank -Pokémon hat.",
            es: "Tu oponente baraja su Pokémon activo y todas las cartas unidas a él en su mazo. Este ataque no se puede usar si tu oponente no tiene Pokémon en banca.",
            it: "Il tuo avversario mescola il suo Pokemon attivo e tutte le carte attaccate nel suo mazzo. Questo attacco non può essere usato se il tuo avversario non ha Pokemon in panchina.",
            pt: "Seu oponente embaralha seu Pokémon ativo e todas as cartas presas a ele em seu deck. Esse ataque não pode ser usado se seu oponente não tiver Pokemon em banco.",
          },
        },
      ],

      retreat: 3,

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
