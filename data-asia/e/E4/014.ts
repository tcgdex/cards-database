import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Shuckle",
         ja: "シャックル",
         fr: "Brillant",
         de: "Schüttelt",
         es: "Llave",
         it: "Sussultare",
         pt: "Esmagado",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [213],
      hp: 30,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Vase Body",
            ja: "花瓶の体",
            fr: "Corps vase",
            de: "Vase -Körper",
            es: "Cuerpo de jarrón",
            it: "Corpo di vaso",
            pt: "Corpo do vaso",
          },
          effect: {
            en: "All damage done by attacks to Shuckle is reduced by 20 <em>(after applying Weakness and Resistance).</em>",
            ja: "シャックルへの攻撃によって与えられたすべての損傷は、20 <em>（脱力感と抵抗を適用した後）に減少します。</em>",
            fr: "Tous les dégâts causés par les attaques à brillance sont réduits de 20 <em> (après avoir appliqué une faiblesse et une résistance). </em>",
            de: "Alle Schäden durch Angriffe auf Shuckle werden um 20 <em> reduziert (nach Auftragen von Schwäche und Widerstand). </Em>",
            es: "Todo el daño causado por los ataques a shuckle se reduce en 20 <em> (después de aplicar debilidad y resistencia). </em>",
            it: "Tutti i danni arrecati dagli attacchi alla shuckle sono ridotti di 20 <em> (dopo aver applicato la debolezza e la resistenza). </em>",
            pt: "Todos os danos causados por ataques a Shuckle são reduzidos em 20 (depois de aplicar fraqueza e resistência). </em>",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Poisonous Saliva",
            ja: "有毒唾液",
            fr: "Salive toxique",
            de: "Giftiger Speichel",
            es: "Saliva venenosa",
            it: "Saliva velenosa",
            pt: "Saliva venenosa",
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
          damage: 10,
        },
      ],

      retreat: 2,

};
