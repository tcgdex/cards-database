import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Golbat",
         ja: "暗いゴルバット",
         fr: "Golbat noir",
         de: "Dunkler Golbat",
         es: "Golbat oscuro",
         it: "Golbat scuro",
         pt: "Golbat escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [42],
      hp: 50,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Sneak Attack",
            ja: "スニーク攻撃",
            fr: "Attaquer",
            de: "Sneak -Angriff",
            es: "Ataque furtivo",
            it: "Sneak Attack",
            pt: "Ataque furtivo",
          },
          effect: {
            en: "Once during your turn, when you play this Pokmon from your hand, you may do 10 damage to 1 of your opponent's Pokmon. <em>(Don't apply Weakness and Resistance for Benched Pokmon.)</em>",
            ja: "ターン中に、このポケモンを手から演奏すると、対戦相手のポケモンの1人に10ダメージを与えることができます。 <em>（ベンチポクモンに衰弱と抵抗を適用しないでください。）</em>",
            fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main, vous pouvez faire 10 dégâts à 1 du Pokémon de votre adversaire. <em> (N'appliquez pas la faiblesse et la résistance des pokmon bancés.) </em>",
            de: "Sobald Sie in Ihrem Zug, wenn Sie dieses Pokémon aus Ihrer Hand spielen, können Sie 10 Schäden an einem der Pokémon Ihres Gegners anrichten. <em> (Wenden Sie keine Schwäche und Widerstand für Bank -Pokmon an.) </em>",
            es: "Una vez durante su turno, cuando juegas este Pokémon de tu mano, puedes hacer 10 daños a 1 de los Pokémon de tu oponente. <em> (no aplique debilidad y resistencia para Pokmon de banca). </em>",
            it: "Una volta durante il tuo turno, quando giochi a questo Pokemon dalla tua mano, puoi fare 10 danni a 1 del Pokemon del tuo avversario. <em> (Non applicare debolezza e resistenza per Pokmon in panchina.) </em>",
            pt: "Uma vez durante o seu turno, quando você toca este Pokémon da sua mão, pode causar 10 danos a 1 do Pokémon do seu oponente. <em> (não aplique fraqueza e resistência ao Pokmon com bancada.) </em>",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Flitter",
            ja: "フリッター",
            fr: "Nageur",
            de: "Flitter",
            es: "Rareza",
            it: "Flitter",
            pt: "Flitter",
          },
          effect: {
            en: "This attack does 20 damage to 1 of your opponent's Pokemon. This attack's damage isn't affected by Weakness or Resistance.",
            ja: "この攻撃は、対戦相手のポケモンの1つに20のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Cette attaque fait 20 dégâts à 1 des pokémon de votre adversaire. Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Dieser Angriff schädigt 20 Schäden an 1 des Pokémon Ihres Gegners. Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Este ataque hace 20 daños a 1 de los Pokémon de tu oponente. El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Questo attacco fa 20 danni a 1 del Pokemon del tuo avversario. Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "Este ataque causa 20 de dano a 1 do Pokémon do seu oponente. O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
