import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Golbat",
         ja: "ゴルバット",
         fr: "Golbat",
         de: "Golbat",
         es: "Golosina",
         it: "Golbat",
         pt: "Golbat",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [42],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Screech",
            ja: "金切り声",
            fr: "Hurler",
            de: "Kreischen",
            es: "Chillido",
            it: "Strillo",
            pt: "Screech",
          },
          effect: {
            en: "Until the end of your next turn, if an attack damages the Defending Pokemon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokemon.",
            ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
            fr: "Jusqu'à la fin de votre prochain tour, si une attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), cette attaque fait 20 dommages supplémentaires au Pokémon en défense.",
            de: "Wenn ein Angriff das verteidigende Pokémon schädigt (nach der Anwendung von Schwäche und Widerstand), bis zum Ende Ihrer nächsten Kurve schadet dieser Angriff 20 weitere Schäden am verteidigenden Pokémon.",
            es: "Hasta el final de su próximo turno, si un ataque daña al Pokémon defensor (después de aplicar debilidad y resistencia), ese ataque hace 20 daños más al Pokémon defensor.",
            it: "Fino alla fine del turno successivo, se un attacco danneggia il Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), quell'attacco fa altri 20 danni al Pokemon in difesa.",
            pt: "Até o final do seu próximo turno, se um ataque danificar o Pokémon atual (depois de aplicar fraqueza e resistência), esse ataque causa mais 20 danos ao Pokémon defensivo.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
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
            en: "If this attack damages the Defending Pokemon, the Defending Pokemon is now Poisoned and you remove a number of damage counters from Golbat equal to half that damage (rounded up to the nearest 10). If Golbat has fewer damage counters than that, remove all of them. Either way, the Defending Pokemon is now Poisoned.",
            ja: "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいゴルバットから多くのダメージカウンターを除去します（最も近い10に丸められます）。 Golbatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。いずれにせよ、防御ポケモンは現在毒されています。",
            fr: "Si cette attaque endommage le Pokémon en défense, le Pokémon en défense est désormais empoisonné et vous retirez un certain nombre de compteurs de dégâts de Golbat égal à la moitié de ces dégâts (arrondi jusqu'aux 10 proches). Si Golbat a moins de compteurs de dégâts que cela, retirez-les tous. Quoi qu'il en soit, le Pokémon en défense est maintenant empoisonné.",
            de: "Wenn dieser Angriff das verteidigende Pokemon schädigt, wird das verteidigende Pokemon nun vergiftet und Sie entfernen eine Reihe von Schadenszähnen von Golbat gleich halb diesen Schaden (abgerundet auf die nächste 10). Wenn Golbat weniger Schadenszähler als das hat, entfernen Sie alle. In jedem Fall ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Si este ataque daña al Pokémon defensor, el Pokémon defensor ahora está envenenado y eliminas una serie de contadores de daño de Golbat igual a la mitad de ese daño (redondeado a los 10 más cercanos). Si Golbat tiene menos contadores de daño que eso, retírelos todos. De cualquier manera, el Pokémon defensor ahora está envenenado.",
            it: "Se questo attacco danneggia il Pokemon in carica, il Pokemon in carica viene ora avvelenato e si rimuove una serie di contatori di danno da Golbat pari alla metà di quel danno (arrotondato fino ai 10 più vicini). Se Golbat ha meno contatori di danno di così, rimuovi tutti. Ad ogni modo, il Pokemon in carica è ora avvelenato.",
            pt: "Se esse ataque danificar o Pokémon defensivo, o Pokémon atual agora está envenenado e você remove vários contadores de dano de Golbat igual à metade desse dano (arredondado para o 10 mais próximo). Se Golbat tiver menos contadores de danos do que isso, remova todos eles. De qualquer maneira, o Pokémon atual agora está envenenado.",
          },
          damage: 10,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
