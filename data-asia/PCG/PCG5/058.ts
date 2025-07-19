import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Armaldo ex",
         ja: "Armaldo Ex",
         fr: "Armaldo ex",
         de: "Armaldo Ex",
         es: "Armaldo ex",
         it: "Armaldo ex",
         pt: "Armaldo Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [348],
      hp: 160,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Dual Armor",
            ja: "デュアルアーマー",
            fr: "Armure double",
            de: "Doppelpanzer",
            es: "Armadura dual",
            it: "Doppia armatura",
            pt: "Armadura dupla",
          },
          effect: {
            en: "As long as Armaldo ex has any React Energy cards attached to it, Armaldo ex is both Grass and Fighting type.",
            ja: "Armaldo Exに反応エネルギーカードが付いている限り、Armaldo Exは草と戦闘タイプの両方です。",
            fr: "Tant qu'Armaldo Ex a des cartes d'énergie de réact qui s'y attachent, Armaldo Ex est à la fois de l'herbe et du type de combat.",
            de: "Solange Armaldo EX irgendwelche React -Energiekarten befindet, ist Armaldo EX sowohl Gras- als auch Kampftyp.",
            es: "Mientras Armaldo ex tenga alguna tarjetas de energía reaccionadas adjuntas, Armaldo ex es tanto de hierba como de tipo de lucha.",
            it: "Finché Armaldo Ex ha qualsiasi scheda di energia react attaccata ad esso, Armaldo Ex è sia erba che di combattimento.",
            pt: "Enquanto o Armaldo Ex tiver algum cartão de energia do React anexado a ele, o Armaldo Ex é o tipo de grama e luta.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Spiral Drain",
            ja: "スパイラルドレイン",
            fr: "Spiritin en spirale",
            de: "Spiralabfluss",
            es: "Desagüe",
            it: "Scarico a spirale",
            pt: "Dreno em espiral",
          },
          effect: {
            en: "Remove 2 damage counters from Armaldo ex.",
            ja: "Armaldo Exから2つのダメージカウンターを削除します。",
            fr: "Retirez 2 compteurs de dégâts d'Armaldo Ex.",
            de: "Entfernen Sie 2 Schadenszähler von Armaldo EX.",
            es: "Retire 2 contadores de daño de Armaldo Ex.",
            it: "Rimuovere 2 contatori di danno da Armaldo Ex.",
            pt: "Remova 2 contadores de danos do Armaldo Ex.",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Vortex Chop",
            ja: "渦チョップ",
            fr: "Vortex Hop",
            de: "Vortex Chop",
            es: "Chop de vórtice",
            it: "Vortex Chop",
            pt: "Chop de vórtice",
          },
          effect: {
            en: "If the Defending Pokemon has any Resistance, this attack's base damage is 100 instead of 70.",
            ja: "防御ポケモンに抵抗がある場合、この攻撃の基本ダメージは70ではなく100です。",
            fr: "Si le Pokémon en défense a une résistance, les dégâts de base de cette attaque sont de 100 au lieu de 70.",
            de: "Wenn das verteidigende Pokemon einen Widerstand hat, beträgt der Grundschaden dieses Angriffs 100 anstelle von 70.",
            es: "Si el Pokémon defensor tiene alguna resistencia, el daño base de este ataque es de 100 en lugar de 70.",
            it: "Se il Pokemon in carica ha una resistenza, il danno base di questo attacco è 100 anziché 70.",
            pt: "Se o Pokémon atual tiver alguma resistência, o dano básico desse ataque é de 100 em vez de 70.",
          },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
