import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Snorlax",
         ja: "Snorlax",
         fr: "Snorlax",
         de: "Snorlax",
         es: "Snorlax",
         it: "Snorlax",
         pt: "Snorlax",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [143],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Rest Up",
            ja: "休んでください",
            fr: "Se reposer",
            de: "Sich ausruhen",
            es: "Descansar",
            it: "Riposare",
            pt: "Descanse",
          },
          effect: {
            en: "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1).",
            ja: "Snorlaxがターンの間に眠っている場合は、Snorlaxから2つのダメージカウンターを削除します（1つしかない場合は1を削除します）。",
            fr: "Si Snorlax reste endormi entre les virages, retirez 2 compteurs de dégâts de Snorlax (retirer 1 s'il n'y en a que 1).",
            de: "Wenn Snorlax zwischen den Kurven eingeschlafen bleibt, entfernen Sie 2 Schadenszähler von Snorlax (entfernen Sie 1, wenn nur 1 vorhanden ist).",
            es: "Si Snorlax permanece dormido entre las curvas, elimine 2 contadores de daño de Snorlax (elimine 1 si solo hay 1).",
            it: "Se Snorlax rimane addormentato tra le curve, rimuovi 2 contatori di danno da Snorlax (rimuovi 1 se c'è solo 1).",
            pt: "Se o Snorlax permanecer dormindo entre as voltas, remova 2 contadores de danos do Snorlax (remova 1 se houver apenas 1).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Collapse",
            ja: "崩壊",
            fr: "Effondrement",
            de: "Zusammenbruch",
            es: "Colapsar",
            it: "Crollo",
            pt: "Colapso",
          },
          effect: {
            en: "Snorlax is now Asleep.",
            ja: "Snorlaxは今眠っています。",
            fr: "Snorlax est maintenant endormi.",
            de: "Snorlax schläft jetzt.",
            es: "Snorlax ahora está dormido.",
            it: "Snorlax ora dorme.",
            pt: "Snorlax está agora dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Toss and Turn",
            ja: "投げてターンします",
            fr: "Mercer et tourner",
            de: "Sich wälzen",
            es: "Tirar y girar",
            it: "Lancia e gira",
            pt: "Misture e vire",
          },
          effect: {
            en: "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
            ja: "Snorlaxが眠っている場合、この攻撃は30ダメージに加えて30ダメージを与えます。 （Snorlaxが眠っていても、この攻撃は使用できます。）",
            fr: "Si Snorlax dort, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires. (Cette attaque peut être utilisée même si Snorlax est endormie.)",
            de: "Wenn Snorlax schläft, verursacht dieser Angriff 30 Schäden plus 30 weitere Schäden. (Dieser Angriff kann auch dann verwendet werden, wenn Snorlax schläft.)",
            es: "Si Snorlax está dormido, este ataque hace 30 daños más 30 más de daño. (Este ataque se puede usar incluso si Snorlax está dormido).",
            it: "Se Snorlax dorme, questo attacco infligge 30 danni più 30 danni. (Questo attacco può essere usato anche se Snorlax è addormentato.)",
            pt: "Se o Snorlax estiver dormindo, esse ataque causará 30 danos mais 30 mais danos. (Este ataque pode ser usado mesmo se Snorlax estiver dormindo.)",
          },
        },
      ],

      retreat: 3,

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
