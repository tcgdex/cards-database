import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Armaldo",
         ja: "アルマルド",
         fr: "Armaldo",
         de: "Armaldo",
         es: "Armaldo",
         it: "Armaldo",
         pt: "Armaldo",
      },


      category: "Pokemon",
      dexId: [348],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Rock Blast",
            ja: "ロックブラスト",
            fr: "Explosion de roche",
            de: "Felsenexplosion",
            es: "Explosión de roca",
            it: "Blast di roccia",
            pt: "Rock Blast",
          },
          effect: {
            en: "Discard up to 5 Fighting Energy cards attached to Armaldo. For each Energy card you discarded, choose an opponent's Pokemon in play and this attack does 20 damage to those Pokemon. (You may choose the same Pokemon more than once.) This attack's damage isn't affected by Weakness or Resistance.",
            ja: "Armaldoに取り付けられた最大5つのファイティングエネルギーカードを捨てます。廃棄したエネルギーカードごとに、プレイ中の対戦相手のポケモンを選択してください。この攻撃は、それらのポケモンに20のダメージを与えます。 （同じポケモンを複数回選択できます。）この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Jeter jusqu'à 5 cartes d'énergie de combat attachées à Armaldo. Pour chaque carte d'énergie que vous avez jetée, choisissez le pokemon d'un adversaire en jeu et cette attaque fait 20 dégâts à ces Pokémon. (Vous pouvez choisir le même Pokémon plus d'une fois.) Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Verwerfen Sie bis zu 5 kämpfende Energiekarten, die an Armaldo befestigt sind. Wählen Sie für jede Energiekarte, die Sie weggeworfen haben, das Pokémon eines Gegners im Spiel, und dieser Angriff schädigt diese Pokemon 20. (Sie können das gleiche Pokémon mehr als einmal auswählen.) Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Deseche hasta 5 cartas de energía de lucha unidas a Armaldo. Para cada carta de energía que descartaste, elige el Pokémon de un oponente en juego y este ataque hace 20 daños a esos Pokémon. (Puede elegir el mismo Pokémon más de una vez). El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Scartare fino a 5 carte di energia di combattimento attaccate ad Armaldo. Per ogni carta di energia che hai scartato, scegli il Pokemon di un avversario in gioco e questo attacco fa 20 danni a quei Pokemon. (Puoi scegliere lo stesso Pokemon più di una volta.) Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "Descarte até 5 cartões de energia de combate a Armaldo. Para cada cartão de energia que você descartou, escolha o Pokémon de um oponente em jogo e esse ataque causa 20 de dano a esses Pokémon. (Você pode escolher o mesmo Pokémon mais de uma vez.) O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mach Claw",
            ja: "マッハクロー",
            fr: "Griffe",
            de: "Mach Claw",
            es: "Machista",
            it: "Mach Claw",
            pt: "Garra mach",
          },
          effect: {
            en: "This attack's damage isn't affected by Resistance.",
            ja: "この攻撃の損傷は抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela resistência.",
          },
          damage: 60,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
