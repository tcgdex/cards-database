import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Dustox",
         ja: "Dustox",
         fr: "Oxaim",
         de: "Staubox",
         es: "Dudox",
         it: "Duspox",
         pt: "Dustox",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [269],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Protective Dust",
            ja: "保護ダスト",
            fr: "Poussière de protection",
            de: "Schutzstaub",
            es: "Polvo protector",
            it: "Polvere protettiva",
            pt: "Poeira protetora",
          },
          effect: {
            en: "Prevent all effects of attacks, except damage, done to Dustox by the Attacking PokÃ©mon.",
            ja: "攻撃するポカンによるダストックスに与えられた損傷を除く攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, à l'exception des dégâts, causés à Dustox par les poké attaquants.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, mit Ausnahme von Schäden, die durch den angreifenden Poké Mon mon zu Dustox durchgeführt werden.",
            es: "Evite todos los efectos de los ataques, excepto el daño, realizado a Docox por el ataque de ataque.",
            it: "Prevenire tutti gli effetti degli attacchi, tranne il danno, fatto a Duspox dal attacco Poké mon.",
            pt: "Evite todos os efeitos dos ataques, exceto os danos, causados ao Pustox pelo ataque de ataque.",
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
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Gust",
            ja: "突風",
            fr: "Rafale",
            de: "Böe",
            es: "Ráfaga",
            it: "Raffica",
            pt: "Rajada",
          },
          damage: 50,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
