import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefable ex",
         ja: "Clefable ex",
         fr: "Clefable Ex",
         de: "Clefable Ex",
         es: "Clefable ex",
         it: "Clefable Ex",
         pt: "Clefable Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [36],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Metronome",
            ja: "メトロノーム",
            fr: "Métronome",
            de: "Metronom",
            es: "Metrónomo",
            it: "Metronomo",
            pt: "Metrônomo",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type that Pokemon is, Clefable ex's type is still Colorless.) Clefable ex performs that attack.",
            ja: "防御ポケモンの攻撃の1つを選択します。メトロノームは、エネルギーコストを除いて攻撃するコピーをコピーします。 （その攻撃を使用するには、他のことをまだしなければなりません。）（ポケモンがどんなタイプであっても、Clefable Exのタイプはまだ無色です。）Clefable Exはその攻撃を実行します。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Metronome copie qui attaque à l'exception de son coût énergétique. (Vous devez toujours faire autre chose pour utiliser cette attaque.) (Quel que soit le type que ce Pokémon est, le type de Clefable Ex est toujours incolore.) Clefable Ex effectue cette attaque.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Metronom -Kopien, die mit Ausnahme der Energiekosten angreifen. (Sie müssen noch alles andere tun, um diesen Angriff zu verwenden.) (Unabhängig davon, welchen Typ das Pokemon ist, ist der Typ von Clefable Ex immer noch farblos.) Clefable Ex führt diesen Angriff aus.",
            es: "Elija 1 de los ataques defensores de Pokémon. Copias de metrónomo que atacan a excepción de su costo de energía. (Aún debes hacer cualquier otra cosa para usar ese ataque). (No importa qué tipo sea Pokemon, el tipo de Clefable Ex todavía es incoloro). Clefable Ex realiza ese ataque.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Metronome copie che attaccano tranne il suo costo energetico. (Devi ancora fare qualsiasi altra cosa per usare quell'attacco.) (Non importa quale tipo sia Pokemon, il tipo di Clefable Ex è ancora incolore.) Clefable Ex esegue quell'attacco.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Cópias do metrônomo que atacam, exceto por seu custo de energia. (Você ainda deve fazer qualquer outra coisa para usar esse ataque.) (Não importa o tipo que o Pokemon seja, o tipo de clefable ex ainda é incolor.) Clefable ex executa esse ataque.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Moon Impact",
            ja: "月の衝撃",
            fr: "Impact de la lune",
            de: "Mondwirkung",
            es: "Impacto en la luna",
            it: "Impatto sulla luna",
            pt: "Impacto da lua",
          },
          damage: 40,
        },
      ],

      retreat: 2,

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
