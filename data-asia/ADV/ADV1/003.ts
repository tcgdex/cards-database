import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Sceptile",
         ja: "seccepile",
         fr: "Sceptile",
         de: "Sceptile",
         es: "Concilio",
         it: "Spetile",
         pt: "Sceptile",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [254],
      hp: 120,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lizard Poison",
            ja: "トカゲ毒",
            fr: "Poison lézard",
            de: "Echsengift",
            es: "Veneno de lagarto",
            it: "Veleno di lucertola",
            pt: "Poisão de lagarto",
          },
          effect: {
            en: "If 1 Energy is attached to Sceptile, the Defending Pokemon is now Asleep.  If 2 Energy is attached to Sceptile, the Defending Pokemon is now Poisoned.  If 3 Energy is attached to Sceptile, the Defending Pokemon is now Asleep and Poisoned.  If 4 or more Energy is attached to Sceptile, the Defending Pokemon is now Asleep, Burned, and Poisoned.",
            ja: "1つのエネルギーがシプタイルに付着している場合、防御ポケモンは眠っています。  2つのエネルギーがシプタイルに付着している場合、防御ポケモンは現在中毒になります。  3つのエネルギーがシプタイルに付着している場合、防御ポケモンは眠って毒されています。  4つ以上のエネルギーがSceptileに付着している場合、防御するポケモンは眠り、燃え、毒されています。",
            fr: "Si 1 énergie est attachée à Sceptile, le Pokémon en défense est maintenant endormi.  Si 2 l'énergie est attachée à Sceptile, le Pokémon en défense est maintenant empoisonné.  Si 3 l'énergie est attachée à Sceptile, le Pokémon en défense est maintenant endormi et empoisonné.  Si 4 ou plus d'énergie est attachée à Sceptile, le Pokémon en défense est maintenant endormi, brûlé et empoisonné.",
            de: "Wenn 1 Energie an Sceptile befestigt ist, schläft das verteidigende Pokémon jetzt.  Wenn 2 Energie an Sceptile gebunden ist, wird das verteidigende Pokemon jetzt vergiftet.  Wenn 3 Energie an Sceptile gebunden ist, schläft das verteidigende Pokémon jetzt und vergiftet.  Wenn 4 oder mehr Energie an Sceptile gebunden ist, schläft das verteidigende Pokémon jetzt, verbrannt und vergiftet.",
            es: "Si 1 energía se une a Sceptile, el Pokémon defensor ahora está dormido.  Si se une 2 energía a Sceptile, el Pokémon defensor ahora está envenenado.  Si se adhiere 3 energía a Sceptile, el Pokémon defensor ahora está dormido y envenenado.  Si se unen 4 o más energía al séTCILE, el Pokémon defensor ahora está dormido, quemado y envenenado.",
            it: "Se 1 energia è attaccata a Sceptile, il Pokemon in difesa è ora addormentato.  Se 2 energia sono attaccate a Sceptile, il Pokemon in difesa viene ora avvelenato.  Se 3 energia è attaccata a Sceptile, il Pokemon in carica è ora addormentato e avvelenato.  Se 4 o più energia sono attaccate a Sceptile, il Pokemon in difesa è ora addormentato, bruciato e avvelenato.",
            pt: "Se 1 energia estiver ligada ao SCECTILE, o Pokémon atual está agora dormindo.  Se 2 energia estiver ligada ao SCECTILE, o Pokémon atual está agora envenenado.  Se 3 energia estiver ligada ao SCECTILE, o Pokémon atual está agora dormindo e envenenado.  Se 4 ou mais energia estiver ligada ao SCECTILE, o Pokémon atual está agora dormindo, queimado e envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Solarbeam",
            ja: "SolarBeam",
            fr: "Solaire",
            de: "Solarbeam",
            es: "Rayo solar",
            it: "Solarbeam",
            pt: "SolarBeam",
          },
          damage: 70,
        },
      ],

      retreat: 3,

};
