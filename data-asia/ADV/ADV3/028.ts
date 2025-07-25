import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Girafarig",
         ja: "Girafarig",
         fr: "Girafarig",
         de: "Girafarig",
         es: "Girafarig",
         it: "Girafarig",
         pt: "Girafarig",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [203],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Synchronized Search",
            ja: "同期された検索",
            fr: "Recherche synchronisée",
            de: "Synchronisierte Suche",
            es: "Búsqueda sincronizada",
            it: "Ricerca sincronizzata",
            pt: "Pesquisa sincronizada",
          },
          effect: {
            en: "If Girafarig and the Defending Pokemon have the same amount of Energy attached to them, pick any 1 card from your deck and put it into your hand. Shuffle your deck afterward.",
            ja: "Girafarigと防御ポケモンがそれらに同じ量のエネルギーを持っている場合は、デッキから1枚のカードを選んで手に入れてください。その後、デッキをシャッフルします。",
            fr: "Si Girafarig et le Pokémon en défense ont la même quantité d'énergie attachée à eux, choisissez n'importe quel 1 carte sur votre deck et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Wenn Girafarig und das verteidigende Pokémon die gleiche Menge an Energie mit sich haben, wählen Sie eine 1 -Karte von Ihrem Deck aus und legen Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Si Girafarig y el Pokémon defensor tienen la misma cantidad de energía unida a ellos, elija cualquier 1 carta de su mazo y póngala en su mano. Baraja tu mazo después.",
            it: "Se Girafarig e i Pokemon in difesa hanno la stessa quantità di energia collegata ad essi, scegli qualsiasi carta 1 dal tuo mazzo e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Se o Girafarig e o Pokémon atual tiverem a mesma quantidade de energia anexada a eles, escolha qualquer carta de 1 do seu baralho e coloque -a em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Breaking Impact",
            ja: "衝撃を破る",
            fr: "Impact de rupture",
            de: "Aufprall",
            es: "Impacto de la ruptura",
            it: "Impatto di rottura",
            pt: "Quebrando impacto",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage for each Colorless Energy in that Pokemon's Retreat Cost to that Pokemon (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対するポケモンのリトリートコストで、それぞれの無色エネルギーに対して10ダメージを与えます（リトリートコストに効果を適用した後）。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts pour chaque énergie incolore dans ce coût de retraite de Pokémon à ce pokemon (après avoir appliqué des effets au coût de retraite). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt 10 Schäden für jede farblose Energie in den Rückzugskosten dieses Pokemon für dieses Pokemon (nachdem die Auswirkungen auf die Rückzugskosten angewendet wurden). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños por cada energía incolora en el costo de retiro de ese Pokémon a ese Pokémon (después de aplicar efectos al costo de retiro). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 10 danni per ogni energia incolore in quel costo di ritiro di Pokemon a quel Pokemon (dopo aver applicato gli effetti sul costo di ritiro). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Esse ataque causa 10 danos para cada energia incolor no custo do retiro de Pokemon para esse Pokemon (após aplicar efeitos ao custo do retiro). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
