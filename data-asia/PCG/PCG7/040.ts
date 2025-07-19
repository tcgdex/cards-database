import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Cradily (Delta Species)",
         ja: "ゆっくり（デルタ種）",
         fr: "Brickily (espèces delta)",
         de: "Cradily (Delta -Arten)",
         es: "CRADILLACIÓN (especie delta)",
         it: "Cradily (Delta Species)",
         pt: "Cradily (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [346],
      hp: 100,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Harsh Fluid",
            ja: "過酷な液体",
            fr: "Fluide",
            de: "Harte Flüssigkeit",
            es: "Líquido duro",
            it: "Fluido duro",
            pt: "Fluido duro",
          },
          effect: {
            en: "Put 5 damage counters on the Defending Pokemon at the end of your opponent's next turn.",
            ja: "対戦相手の次のターンの終わりに、防御ポケモンに5つのダメージカウンターを置きます。",
            fr: "Mettez 5 compteurs de dégâts sur le Pokémon en défense à la fin du prochain tour de votre adversaire.",
            de: "Legen Sie am Ende der nächsten Runde Ihres Gegners 5 Schadenszähler auf das verteidigende Pokémon.",
            es: "Pon 5 contadores de daño en el Pokémon defensor al final del próximo turno de tu oponente.",
            it: "Metti 5 contatori di danno sul Pokemon in carica alla fine del prossimo turno dell'avversario.",
            pt: "Coloque 5 contadores de danos no Pokémon atual no final do próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Poison Tentacles",
            ja: "毒の触手",
            fr: "Tentacules empoisonnés",
            de: "Gifttentakel",
            es: "Tentáculos venenosos",
            it: "Tentacoli velenosi",
            pt: "Poison Tentacles",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
