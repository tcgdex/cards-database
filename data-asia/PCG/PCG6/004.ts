import {Card} from "../../../interfaces"
import Set from "../PCG6"

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

      rarity: "Common",
      category: "Pokemon",
      dexId: [42],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Super Poison Breath",
            ja: "スーパーポイズンブレス",
            fr: "Super souffle",
            de: "Super Gift Atem",
            es: "Super Aliento venenoso",
            it: "Respiro super veleno",
            pt: "Super Poison Breath",
          },
          effect: {
            en: "Each Defending Pokemon is now Poisoned.",
            ja: "それぞれの防御ポケモンは現在中毒になっています。",
            fr: "Chaque Pokémon défendant est maintenant empoisonné.",
            de: "Jedes Verteidigungspokemon ist jetzt vergiftet.",
            es: "Cada Pokémon defensor ahora está envenenado.",
            it: "Ogni Pokemon in difesa è ora avvelenato.",
            pt: "Cada Pokémon atual agora está envenenado.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sonic Signal",
            ja: "ソニック信号",
            fr: "Signal sonore",
            de: "Schallsignal",
            es: "Señal sonora",
            it: "Segnale sonoro",
            pt: "Sinal sonoro",
          },
          effect: {
            en: "Choose 2 of your opponent's Pokemon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 2 du Pokémon de votre adversaire. Cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 des Pokémon Ihres Gegners. Dieser Angriff schädigt jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 2 del Pokémon de tu oponente. Este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 2 del Pokemon del tuo avversario. Questo attacco fa 10 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 do Pokémon do seu oponente. Este ataque causa 10 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
