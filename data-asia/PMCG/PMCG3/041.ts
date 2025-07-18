import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Aerodactyl",
         ja: "アエロダクチル",
         fr: "Aérodactyle",
         de: "Aerodactyl",
         es: "Aerodactil",
         it: "Aerodattilo",
         pt: "Aerodactyl",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [142],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Prehistoric Power",
            ja: "先史時代の力",
            fr: "Pouvoir préhistorique",
            de: "Prähistorische Kraft",
            es: "Poder prehistórico",
            it: "Potere preistorico",
            pt: "Poder pré -histórico",
          },
          effect: {
            en: "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
            ja: "これ以上進化カードを再生できません。このパワーは、アエロダクチルが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Plus de cartes d'évolution ne peuvent être jouées. Ce pouvoir cesse de fonctionner tandis que l'aérodactyle est endormi, confus ou paralysé.",
            de: "Es können keine Evolutionskarten mehr gespielt werden. Diese Kraft hört auf, während Aerodactyl schläft, verwirrt oder gelähmt ist.",
            es: "No se pueden jugar más cartas de evolución. Esta potencia deja de funcionar mientras Aerodactyl está dormido, confundido o paralizado.",
            it: "Non possono essere giocate più carte di evoluzione. Questa potenza smette di funzionare mentre l'aerodattil è addormentato, confuso o paralizzato.",
            pt: "Não há mais cartas de evolução podem ser jogadas. Esse poder para de funcionar enquanto o aerodactyl está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
