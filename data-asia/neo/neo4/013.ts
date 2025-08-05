import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Celebi",
         ja: "輝くセレビ",
         fr: "Celebi brillant",
         de: "Leuchtender Celebi",
         es: "Celebi brillante",
         it: "Celebi splendente",
         pt: "Celebi brilhante",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [251],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Healing Water",
            ja: "癒しの水",
            fr: "Eau de guérison",
            de: "Heilendes Wasser",
            es: "Agua curativa",
            it: "Guarigione dell'acqua",
            pt: "Água curativa",
          },
          effect: {
            en: "Remove a number of damage counters from 1 of your Benched Pokemon equal to the number of Water Energy cards attached to Shining Celebi. If the Pokemon has fewer damage counters than that, remove all of them.",
            ja: "輝くセレビに接続された水エネルギーカードの数に等しい1枚のベンチポケモンから多くのダメージカウンターを削除します。ポケモンのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dégâts de 1 de votre pokemon bancé égal au nombre de cartes d'énergie d'eau attachées à celebi brillant. Si le Pokémon a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähler von 1 Ihres Bankpokémons, das der Anzahl der an Shining Celebi befestigten Wasserergiekarten entspricht. Wenn das Pokémon weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Elimine una serie de contadores de daños de 1 de su Pokémon de banca igual al número de tarjetas de energía de agua unidas a Celebi brillante. Si el Pokémon tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da 1 del tuo Pokemon in panchina pari al numero di carte di energia dell'acqua attaccate a Celebi splendente. Se il Pokemon ha meno contatori di danno di quello, rimuovi tutti.",
            pt: "Remova uma série de contadores de dano de 1 de seu Pokémon em banco igual ao número de cartões de energia d'água ligados à Celebi brilhante. Se o Pokémon tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
        {
          cost: ["Grass", "Psychic"],
          name: {
            en: "Miracle Leaf",
            ja: "奇跡の葉",
            fr: "Feuille de miracle",
            de: "Wunderblatt",
            es: "Hoja milagrosa",
            it: "Miracolo foglia",
            pt: "Folha milagrosa",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Energy attached to the Defending Pokemon. If you get 1 or more heads, the Defending Pokemon is now Asleep, Confused, or Poisoned (your choice).",
            ja: "防御ポケモンに取り付けられたエネルギーの数に等しい多数のコインをひっくり返します。 1つ以上の頭を手に入れると、防御するポケモンは眠っている、混乱し、毒されています（あなたの選択）。",
            fr: "Retournez un certain nombre de pièces égales au nombre d'énergie attachées au Pokémon en défense. Si vous obtenez 1 têtes ou plus, le Pokémon en défense est maintenant endormi, confus ou empoisonné (votre choix).",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an das verteidigenden Pokémon angeschlossenen Energie entspricht. Wenn Sie 1 oder mehr Köpfe erhalten, schläft das verteidigende Pokémon jetzt, verwirrt oder vergiftet (Ihre Wahl).",
            es: "Voltee una serie de monedas igual al número de energía unida al Pokémon defensor. Si obtienes 1 o más cabezas, el Pokémon defensor ahora está dormido, confundido o envenenado (tu elección).",
            it: "Capovolgi una serie di monete pari al numero di energia allegata al Pokemon in difesa. Se ottieni 1 o più teste, il Pokemon in carica è ora addormentato, confuso o avvelenato (la tua scelta).",
            pt: "Vire uma série de moedas iguais ao número de energia ligada ao pokemon defensor. Se você conseguir 1 ou mais cabeças, o Pokémon atual está agora dormindo, confuso ou envenenado (sua escolha).",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
