import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Crobat",
         ja: "コガのクロバット",
         fr: "Crobat de Koga",
         de: "Kogas Crobat",
         es: "Crobat de Koga",
         it: "Koga's Crobat",
         pt: "Crobat de Koga",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [169],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Poison Bite",
            ja: "毒の噛み込み",
            fr: "Morsure de poison",
            de: "Giftstich",
            es: "Mordedura de veneno",
            it: "Mrso veleno",
            pt: "Picada de veneno",
          },
          effect: {
            en: "If this attack damages the Defending Pokemon, the Defending Pokemon is now Poisoned and you remove a number of damage counters from Koga's Crobat equal to half that damage (rounded up to the nearest 10). If Koga's Crobat has fewer damage counters than that, remove all of them.",
            ja: "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいコガのクロバットから多くのダメージカウンターを除去します（最も近い10に丸められます）。 KogaのCrobatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Si cette attaque endommage le Pokémon en défense, le Pokémon en défense est maintenant empoisonné et vous supprimez un certain nombre de compteurs de dégâts du Crobat de Koga égal à la moitié de ces dégâts (arrondi jusqu'aux 10 proches). Si le Crobat de Koga a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Wenn dieser Angriff das verteidigende Pokémon schädigt, wird das verteidigende Pokémon jetzt vergiftet und Sie entfernen eine Reihe von Schadenszähnen aus Kogas Crobat, die der Hälfte dieser Schädigung entsprechen (bis auf 10 abgerundet). Wenn Kogas Crobat weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Si este ataque daña al Pokémon defensor, el Pokémon defensor ahora está envenenado y eliminas una serie de contadores de daño del Crobat de Koga igual a la mitad de ese daño (redondeado a los 10 más cercanos). Si Crobat de Koga tiene menos contadores de daño que eso, retírelos todos.",
            it: "Se questo attacco danneggia il Pokemon in carica, il Pokemon in carica viene ora avvelenato e si rimuove una serie di contatori di danno dal Crobat di Koga pari alla metà di quel danno (arrotondato fino ai 10 più vicini). Se il crobat di Koga ha meno contatori di danno di quello, rimuovili tutti.",
            pt: "Se esse ataque danificar o Pokémon atual, o Pokémon atual agora está envenenado e você remove vários contadores de dano do Crobat de Koga igual à metade desse dano (arredondado para os 10 mais próximos). Se o Crobat de Koga tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 10,
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
