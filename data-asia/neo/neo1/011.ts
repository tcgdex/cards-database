import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Ariados",
         ja: "アリアドス",
         fr: "Ariados",
         de: "Ariados",
         es: "Ariados",
         it: "Ariados",
         pt: "ARIADOS",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [168],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Spider Web",
            ja: "スパイダーウェブ",
            fr: "Toile d'araignée",
            de: "Spinnennetz",
            es: "Spider Web",
            it: "Ragno web",
            pt: "Spider Web",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't retreat. (Benching or evolving that Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは退却できません。 （ポケモンがこの効果を終了するというベンチまたは進化。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas se retirer. (Banc ou évolution de ce pokemon termine cet effet.)",
            de: "Eine Münze drehen. Wenn Köpfe, kann sich das verteidigende Pokemon nicht zurückziehen. (Beulen oder Weiterentwicklung dieses Pokemon beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede retirarse. (Benching o evolucionando que Pokémon termina este efecto).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa non può ritirarsi. (Da banco o in evoluzione che Pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor não pode recuar. (Bancho ou evolução que Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
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
            en: "If this attack damages the Defending Pokemon, the Defending Pokemon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them.",
            ja: "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいアリアドから多くのダメージカウンターを除去します（最も近い10に丸められます）。 Ariadosがそれよりも少ないダメージカウンターを持っている場合、それらすべてを削除します。",
            fr: "Si cette attaque endommage le Pokémon en défense, le Pokémon en défense est maintenant empoisonné et vous retirez un certain nombre de compteurs de dégâts d'Ariados égaux à la moitié de ces dégâts (arrondi jusqu'aux 10 proches). Si Ariados a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Wenn dieser Angriff das verteidigende Pokemon schädigt, wird das verteidigende Pokemon nun vergiftet und Sie entfernen eine Reihe von Schadenszähnen von Ariados, die der Hälfte dieser Schäden entsprechen (abgerundet auf die nächste 10). Wenn Ariados weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Si este ataque daña al Pokémon defensor, el Pokémon defensor ahora está envenenado y eliminas una serie de contadores de daño de Arios igual a la mitad de ese daño (redondeado a los 10 más cercanos). Si Ariados tiene menos contadores de daño que eso, retírelos todos.",
            it: "Se questo attacco danneggia il Pokemon in carica, il Pokemon in carica viene ora avvelenato e si rimuove una serie di contatori di danno da Ariados pari alla metà di quel danno (arrotondato fino ai 10 più vicini). Se Ariados ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Se esse ataque danificar o Pokémon defensivo, o Pokemon atual agora está envenenado e você remove vários contadores de danos de Ariadas iguais à metade desse dano (arredondado para o 10 mais próximo). Se Ariados tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
