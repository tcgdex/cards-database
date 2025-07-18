import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Salamence ex",
         ja: "Salamence Ex",
         fr: "Salamence ex",
         de: "Salamence Ex",
         es: "Salamence ex",
         it: "Salamence Ex",
         pt: "Salamence Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [373],
      hp: 160,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Dragon Lift",
            ja: "ドラゴンリフト",
            fr: "Lifting dragon",
            de: "Drachenlift",
            es: "Ascensor de dragón",
            it: "Dragon Lift",
            pt: "Elevador de dragão",
          },
          effect: {
            en: "The Retreat Cost for each of your PokÃ©mon (excluding PokÃ©mon-ex and Baby PokÃ©mon) is 0.",
            ja: "Pokã©Mon（Pokã©Mon-ExとBabyPokã©Monを除く）のリトリートコストは0です。",
            fr: "Le coût de retraite pour chacun de vos poké (excluant Pokã © Mon-EX et Baby Pokã © Mon) est 0.",
            de: "Die Rückzugskosten für jedes Ihrer Poké Mon (ohne Poké Mon-ex und Baby Poké Mon Mon) beträgt 0.",
            es: "El costo de retirada para cada uno de sus Poké Mon (excluyendo Poké Mon-Ex y Baby Poké Mon) es 0.",
            it: "Il costo di ritiro per ciascuno dei tuoi poké mon (escluso Poké mon-ex e baby poké mon) è 0.",
            pt: "O custo do retiro para cada um dos seus Poké (excluindo Poké Mon-Ex e Baby Poké Mon) é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flame Jet",
            ja: "炎ジェット",
            fr: "Jet de flamme",
            de: "Flammenstrahl",
            es: "Chorro de llamas",
            it: "Jet Flame",
            pt: "Jato de chama",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 40 damage to that Pokemon. This attack's damage isn't affected by Weakness or Resistance.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 40 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 40. Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 40 daños a ese Pokémon. El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 40 danni a quel Pokemon. Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 40 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
        {
          cost: ["Fire", "Water", "Colorless", "Colorless"],
          name: {
            en: "Bright Flame",
            ja: "明るい炎",
            fr: "Flamme vive",
            de: "Helle Flamme",
            es: "Llama brillante",
            it: "Fiamma luminosa",
            pt: "Chama brilhante",
          },
          effect: {
            en: "Discard 2 Energy attached to Salamence ex.",
            ja: "Salamence Exに取り付けられた2つのエネルギーを捨てます。",
            fr: "Jeter 2 énergie attachée à la salamence Ex.",
            de: "Energie verwerfen 2 Energie an Salamence Ex.",
            es: "Descartar 2 energía unida a la salamencia ex.",
            it: "Scartare 2 energia attaccata alla salamence Ex.",
            pt: "Descarte 2 energia ligada à salameência Ex.",
          },
          damage: 120,
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
