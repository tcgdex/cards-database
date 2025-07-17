import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Blissey",
         ja: "ブリッシー",
         fr: "Blissey",
         de: "Blissey",
         es: "Blissey",
         it: "Blissey",
         pt: "Blissey",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [242],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Softboiled",
            ja: "ソフトボイルド",
            fr: "Softbouile",
            de: "Softboiled",
            es: "Suave",
            it: "SoftboiLed",
            pt: "Softboiled",
          },
          effect: {
            en: "When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them.",
            ja: "手からブリッシーをプレイすると、コインをひっくり返すことができます。頭の場合は、Blisseyから8つのダメージカウンターを削除します。尾の場合、Blisseyから4つのダメージカウンターを削除します。いずれにせよ、Blisseyのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
            fr: "Lorsque vous jouez à Blissey de votre main, vous pouvez retourner une pièce. Si les têtes, retirez 8 compteurs de dégâts de Blissey. Si Tails, retirez 4 compteurs de dégâts de Blissey. Quoi qu'il en soit, si Blissey a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Wenn Sie Blissey von Ihrer Hand spielen, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, entfernen Sie 8 Schadenszähler von Blissey. Wenn Schwänze, entfernen Sie 4 Schadenszähler von Blissey. In beiden Fällen, wenn Blissey weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Cuando juegas a Blissey de tu mano, puedes voltear una moneda. Si se dirige, retire 8 contadores de daño de Blissey. Si las colas, retire 4 contadores de daño de Blissey. De cualquier manera, si Blissey tiene menos contadores de daño que eso, retírelos todos.",
            it: "Quando giochi a Blissey dalla tua mano, puoi capovolgere una moneta. Se la testa, rimuovere 8 contatori di danno da Blissey. Se code, rimuovere 4 contatori di danno da Blissey. In entrambi i casi, se Blissey ha meno contatori di danno di quello, rimuovi tutti.",
            pt: "Quando você toca Blissey da sua mão, você pode virar uma moeda. Se as cabeças, remova 8 contadores de danos de Blissey. Se as caudas, remova 4 contadores de danos de Blissey. De qualquer maneira, se Blissey tiver menos contadores de danos do que isso, remova todos eles.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
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
