import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Shedinja",
         ja: "Shedinja",
         fr: "Shedinja",
         de: "Shedinja",
         es: "Cobertizo",
         it: "Shedinja",
         pt: "Shedinja",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [292],
      hp: 50,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Empty Shell",
            ja: "空のシェル",
            fr: "Coquille vide",
            de: "Leere Hülle",
            es: "Caparazón vacío",
            it: "Shell vuoto",
            pt: "Concha vazia",
          },
          effect: {
            en: "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
            ja: "Shedinjaがノックアウトされると、対戦相手は賞品を撮りません。",
            fr: "Lorsque Shedinja est éliminée, votre adversaire ne prend aucun prix.",
            de: "Wenn Shedinja ausgeschlagen wird, nimmt Ihr Gegner keine Preiskarten.",
            es: "Cuando Shedinja es noqueada, tu oponente no toma ninguna tarjeta de premio.",
            it: "Quando Shedinja viene eliminato, il tuo avversario non prende carte premio.",
            pt: "Quando Shedinja é nocauteado, seu oponente não recebe nenhum cartas de prêmios.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Extra Curse",
            ja: "余分な呪い",
            fr: "Malédiction supplémentaire",
            de: "Zusätzlicher Fluch",
            es: "Maldición extra",
            it: "Maledizione extra",
            pt: "Maldição extra",
          },
          effect: {
            en: "Put 2 damage counters on the Defending Pokemon. If the Defending Pokemon is Pokemon-ex, put 4 damage counters instead.",
            ja: "防御ポケモンに2つのダメージカウンターを置きます。防御ポケモンがポケモンエクスの場合、代わりに4つのダメージカウンターを入れます。",
            fr: "Mettez 2 compteurs de dégâts sur le Pokémon en défense. Si le Pokémon en défense est Pokemon-EX, mettez à la place 4 compteurs de dégâts.",
            de: "Setzen Sie 2 Schadenszähler auf das verteidigende Pokémon. Wenn das verteidigende Pokemon Pokemon-EX ist, setzen Sie stattdessen 4 Schadenszähler.",
            es: "Pon 2 contadores de daño en el Pokémon defensor. Si el Pokémon defensor es Pokémon-EX, coloque 4 contadores de daño.",
            it: "Metti 2 contatori di danno sul Pokemon in carica. Se il Pokemon in carica è Pokemon-Ex, inserisci invece 4 contatori di danno.",
            pt: "Coloque 2 contadores de danos no Pokémon atual. Se o Pokémon atual for Pokemon-Ex, coloque 4 contadores de danos.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
