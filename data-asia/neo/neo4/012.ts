import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Crobat",
         ja: "暗いクロバット",
         fr: "Crobat noir",
         de: "Dunkler Krobat",
         es: "Crobat oscuro",
         it: "Crobat scuro",
         pt: "Dark Crobat",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Surprise Bite",
            ja: "サプライズバイト",
            fr: "Morsure surprise",
            de: "Überraschungsbiss",
            es: "Bocado sorpresa",
            it: "MIT a sorpresa",
            pt: "Mordida surpresa",
          },
          effect: {
            en: "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokmon. This power does 20 damage to that Pokmon. <em>(Don't apply Weakness and Resistance.)</em>",
            ja: "あなたがあなたの手から暗いクロバットを演奏するとき、あなたはあなたの対戦相手のポクモンの1つを選択するかもしれません。このパワーは、そのポクモンに20のダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em>",
            fr: "Lorsque vous jouez à Dark Crobat de votre main, vous pouvez choisir un des pokmon de votre adversaire. Cette puissance fait 20 dégâts à ce Pokmon. <em> (N'appliquez pas la faiblesse et la résistance.) </em>",
            de: "Wenn Sie dunkle Crobat von Ihrer Hand spielen, können Sie 1 der Pokmon Ihres Gegners auswählen. Diese Kraft schadet 20 Schäden an diesem Pokmon. <em> (wenden Sie keine Schwäche und Widerstand an.) </em>",
            es: "Cuando juegas Crobat Dark de tu mano, puedes elegir 1 de los Pokmon de tu oponente. Este poder hace 20 daños a ese Pokmon. <em> (no aplique debilidad y resistencia.) </em>",
            it: "Quando giochi a Dark Crobat dalla tua mano, puoi scegliere 1 dei Pokmon del tuo avversario. Questa potenza infligge 20 danni a quel Pokmon. <em> (non applicare debolezza e resistenza.) </em>",
            pt: "Quando você toca crobat escuro da sua mão, você pode escolher 1 do Pokmon do seu oponente. Esse poder causa 20 danos a esse Pokmon. <em> (não aplique fraqueza e resistência.) </em>",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Dark Drain",
            ja: "暗い排水",
            fr: "Drain sombre",
            de: "Dunkler Abfluss",
            es: "Desagüe",
            it: "Scarico scuro",
            pt: "Dreno escuro",
          },
          effect: {
            en: "Flip a coin for each of your opponent's Pokemon. For each heads, this attack does 10 damage to that Pokemon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.",
            ja: "相手のポケモンごとにコインをひっくり返します。各ヘッドについて、この攻撃はそのポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。 Dark Crobatから多くのダメージカウンターを削除します。 Dark Crobatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retournez une pièce pour chacun des Pokémon de votre adversaire. Pour chaque tête, cette attaque fait 10 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance. Retirez un certain nombre de compteurs de dégâts de Crobat sombre égal aux dégâts infligés. Si Dark Crobat a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Drehen Sie eine Münze für jedes Pokémon Ihres Gegners. Für jeden Köpfe schädigt dieser Angriff dieses Pokémon 10. Wenden Sie keine Schwäche und Widerstand an. Entfernen Sie eine Reihe von Schadenszähnen aus dunklen Krobat, die dem Schaden entspricht. Wenn dunkler Crobat weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Voltea una moneda para cada Pokémon de tu oponente. Para cada cabezal, este ataque hace 10 daños a ese Pokémon. No aplique debilidad y resistencia. Elimine una serie de contadores de daño de Crobat oscuro igual al daño que se da. Si Crobat oscuro tiene menos contadores de daño que eso, retírelos todos.",
            it: "Capovolgi una moneta per ciascuno dei Pokemon del tuo avversario. Per ogni testa, questo attacco fa 10 danni a quel Pokemon. Non applicare debolezza e resistenza. Rimuovere una serie di contatori di danno da Dark Crobat pari al danno inflitto. Se Dark Crobat ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Vire uma moeda para cada um dos Pokémon do seu oponente. Para cada cabeça, esse ataque causa 10 danos a esse Pokémon. Não aplique fraqueza e resistência. Remova uma série de contadores de danos do CROBAT escuro igual aos danos causados. Se o Dark Crobat tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
