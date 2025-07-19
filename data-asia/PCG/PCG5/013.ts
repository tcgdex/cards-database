import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lileep",
         ja: "lileep",
         fr: "Lilep",
         de: "Lileep",
         es: "Lileep",
         it: "Lileep",
         pt: "Lileep",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [345],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tender Tentacles",
            ja: "柔らかい触手",
            fr: "Tentacules tendres",
            de: "Zarte Tentakel",
            es: "Tentáculos tiernos",
            it: "Teneri tentacoli",
            pt: "Tentáculos ternos",
          },
          effect: {
            en: "If Lileep has any React Energy cards attached to it, remove 2 damage counters from Lileep.",
            ja: "Lileepに反応エネルギーカードが付属している場合は、Lileepから2つのダメージカウンターを削除します。",
            fr: "Si Lileep a des cartes d'énergie React qui y sont fixées, retirez 2 compteurs de dégâts de Lileep.",
            de: "Wenn Lileep an React Energy -Karten angebracht ist, entfernen Sie 2 Schadenszähler von lileep.",
            es: "Si Lileep tiene alguna tarjetas de energía reaccionadas unidas, elimine 2 contadores de daño de Lileep.",
            it: "Se Lileep ha delle carte di energia react collegate ad esso, rimuovere 2 contatori di danno da Lileep.",
            pt: "Se o Lileep tiver algum cartão de energia do React anexado a ele, remova 2 contadores de danos do Lileep.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
