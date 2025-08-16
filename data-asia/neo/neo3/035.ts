import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Misdreavus",
         ja: "ミスレアヴァス",
         fr: "Malseaux",
         de: "Miseravus",
         es: "Desgracia",
         it: "Misreavus",
         pt: "MISDRAVUS",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [200],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Night Eyes",
            ja: "ナイトアイズ",
            fr: "Yeux nocturnes",
            de: "Nachtaugen",
            es: "Ojos nocturnos",
            it: "Occhi notturni",
            pt: "Olhos noturnos",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Perish Song",
            ja: "滅びる歌",
            fr: "Périr une chanson",
            de: "Umkommen Lied",
            es: "Canción perezosa",
            it: "Canzone perish",
            pt: "Música perecional",
          },
          effect: {
            en: "If the Defending Pokemon is Asleep and was attacked with Night Eyes during your last turn, it is Knocked Out.",
            ja: "防衛ポケモンが眠っていて、最後のターン中に夜目で攻撃された場合、それはノックアウトされます。",
            fr: "Si le Pokémon en défense est endormi et a été attaqué avec les yeux de nuit pendant votre dernier tour, il est éliminé.",
            de: "Wenn das verteidigende Pokémon in der letzten Runde mit Nachtaugen angegriffen wurde, wird es ausgeschlagen.",
            es: "Si el Pokémon defensor está dormido y fue atacado con los ojos nocturnos durante su último turno, se elimina.",
            it: "Se il Pokemon in carica è addormentato ed è stato attaccato con gli occhi notturni durante l'ultimo turno, viene eliminato.",
            pt: "Se o Pokémon atual está dormindo e foi atacado com olhos noturnos durante o seu último turno, ele é nocauteado.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
