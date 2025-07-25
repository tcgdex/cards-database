import {Card} from "../../../interfaces"
import Set from "../PCG4"

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

      rarity: "Rare",
      category: "Pokemon",
      dexId: [213],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Extra-tight",
            ja: "非常にタイト",
            fr: "Très serré",
            de: "Extra-Mist",
            es: "Extravagante",
            it: "Extra a tenero",
            pt: "Extra-Tight",
          },
          effect: {
            en: "Prevent all damage done to Shuckle by attacks from your opponent's PokÃ©mon-ex.",
            ja: "対戦相手のポカモンエクスからの攻撃により、あらゆるダメージが攻撃を行うのを防ぎます。",
            fr: "Empêchez tous les dégâts causés à la randonnée par les attaques des Poké-Mor de votre adversaire.",
            de: "Verhindern Sie alle Schäden, die durch Angriffe aus dem Poké-Mon-EX Ihres Gegners geschossen wurden.",
            es: "Evite todo el daño causado por los ataques de los ataques del Poké de tu oponente Mon-Ex.",
            it: "Impedisci tutti i danni fatti per rastrellare dagli attacchi dal poké mon-ex del tuo avversario.",
            pt: "Evite todos os danos causados a Stury por ataques do Poké Mon-ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Toxic",
            ja: "有毒",
            fr: "Toxique",
            de: "Giftig",
            es: "Tóxico",
            it: "Tossico",
            pt: "Tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokemon between turns.",
            ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Mettez 2 compteurs de dégâts au lieu de 1 sur le Pokémon en défense entre les virages.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Setzen Sie 2 Schadenszähler anstelle von 1 auf das verteidigende Pokémon zwischen den Kurven.",
            es: "El Pokémon defensor ahora está envenenado. Coloque 2 contadores de daño en lugar de 1 en el Pokémon defensor entre giros.",
            it: "Il Pokemon in carica è ora avvelenato. Metti 2 contatori di danno invece di 1 sul Pokemon in difesa tra le curve.",
            pt: "O Pokémon atual agora está envenenado. Coloque 2 contadores de danos em vez de 1 no Pokémon atual entre as voltas.",
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
