import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Dugtrio",
         ja: "Dugtrio",
         fr: "Dugtrio",
         de: "Dugtrio",
         es: "Dugtrio",
         it: "Dugtrio",
         pt: "Dugtrio",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [51],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Sonicboom",
            ja: "Sonicboom",
            fr: "Sonicboom",
            de: "Sonicboom",
            es: "Sonicboom",
            it: "Sonicboom",
            pt: "Sonicboom",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness or Resistance.",
            ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Rumble",
            ja: "ランブル",
            fr: "Gronder",
            de: "Rumpeln",
            es: "Retumbar",
            it: "Rombo",
            pt: "Rumble",
          },
          effect: {
            en: "The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
