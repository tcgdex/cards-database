import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Sealeo",
         ja: "シーレオ",
         fr: "Sealeo",
         de: "Sealeo",
         es: "Marina",
         it: "Sealeo",
         pt: "Sealeo",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [364],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Super Icy Wind",
            ja: "超氷の風",
            fr: "Vent super glacé",
            de: "Super eisiger Wind",
            es: "Viento súper helado",
            it: "Vento super ghiacciato",
            pt: "Vento super gelado",
          },
          effect: {
            en: "Does 10 damage to each of your opponent's Pokemon.  This attack's damage isn't affected by Weakness or Resistance.",
            ja: "対戦相手の各ポケモンに10ダメージを与えます。  この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Fait 10 dégâts à chacun des pokémon de votre adversaire.  Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Schädigt 10 das Pokémon Ihres Gegners.  Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Hace 10 daños a cada Pokémon de tu oponente.  El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Fa 10 danni a ciascuno dei Pokemon del tuo avversario.  Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "10 danos a cada um dos Pokémon do seu oponente.  O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Skull Bash",
            ja: "頭蓋骨バッシュ",
            fr: "Balle de crâne",
            de: "Schädelbash",
            es: "Cráneo",
            it: "Cash cranio",
            pt: "Bash do crânio",
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
