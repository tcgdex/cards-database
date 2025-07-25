import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Pelipper",
         ja: "ペリッパー",
         fr: "Peignet",
         de: "Pelipper",
         es: "Pelipador",
         it: "Pelipper",
         pt: "Pelipper",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [279],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bay Dance",
            ja: "ベイダンス",
            fr: "Danse de la baie",
            de: "Bay Dance",
            es: "Baile de baile",
            it: "Bay Dance",
            pt: "Bay Dance",
          },
          effect: {
            en: "During your next turn, if any of your current Active Pokemon does damage to any Defending Pokemon, the attack does 30 more damage (before applying Weakness and Resistance).",
            ja: "次のターン中に、現在のアクティブなポケモンのいずれかが防御するポケモンにダメージを与えた場合、攻撃は30件のダメージを与えます（脱力感と抵抗を適用する前に）。",
            fr: "Au cours de votre prochain tour, si l'un de votre Pokémon actif actuel endommage tout Pokémon en défense, l'attaque fait 30 dégâts supplémentaires (avant d'appliquer la faiblesse et la résistance).",
            de: "Wenn Sie in Ihrem nächsten Zug, wenn eines Ihrer aktuellen aktiven Pokémon ein verteidigendes Pokémon schädigt, verursacht der Angriff 30 weitere Schäden (bevor sie Schwäche und Widerstand anwendet).",
            es: "Durante su próximo turno, si alguno de sus Pokémon activos actuales da daño a cualquier Pokémon defensor, el ataque hace 30 daños más (antes de aplicar debilidad y resistencia).",
            it: "Durante il tuo prossimo turno, se uno qualsiasi dei tuoi attuali Pokemon attivi fa danni a qualsiasi Pokemon in difesa, l'attacco fa altri 30 danni (prima di applicare debolezza e resistenza).",
            pt: "Durante o seu próximo turno, se algum dos seus Pokémon ativos atuais causarem danos a qualquer Pokémon defensivo, o ataque causar mais 30 danos (antes de aplicar fraqueza e resistência).",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Aqua Sonic",
            ja: "アクアソニック",
            fr: "Aqua sonic",
            de: "Aqua Sonic",
            es: "Aqua Sonic",
            it: "Aqua Sonic",
            pt: "Aqua Sonic",
          },
          effect: {
            en: "This attack's damage is not affected by Resistance.",
            ja: "この攻撃の損傷は、抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs wird nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano deste ataque não é afetado pela resistência.",
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
