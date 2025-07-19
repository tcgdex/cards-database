import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Flygon (Delta Species)",
         ja: "フライゴン（デルタ種）",
         fr: "Flygon (espèce delta)",
         de: "Flygon (Delta -Arten)",
         es: "Flygon (especie delta)",
         it: "Flygon (Delta Species)",
         pt: "Flygon (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [330],
      hp: 110,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Delta Supply",
            ja: "デルタの供給",
            fr: "Delta Supply",
            de: "Delta -Versorgung",
            es: "Suministro delta",
            it: "Fornitura delta",
            pt: "Delta Supply",
          },
          effect: {
            en: "Once during your turn (before your attack), you may attach a basic Energy card or a Delta Rainbow Energy card from your hand to 1 of your PokÃ©mon that has Delta on its card. This power can't be used if Flygon is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、基本的なエネルギーカードまたはデルタレインボーエネルギーカードを、そのカードにデルタを持っているポカモンの1つに添付できます。 Flygonが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte d'énergie de base ou une carte d'énergie arc-en-ciel delta de votre main à 1 de votre poké mon qui a dulta sur sa carte. Cette puissance ne peut pas être utilisée si Flygon est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Kurses (vor Ihrem Angriff) sind, können Sie eine grundlegende Energiekarte oder eine Delta Rainbow Energy Card von Ihrer Hand an 1 Ihres Pokémon mit Delta auf der Karte anschließen. Diese Leistung kann nicht verwendet werden, wenn Flygon von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede adjuntar una tarjeta de energía básica o una tarjeta de energía del arco iris delta desde su mano a 1 de su Poké Mon que tiene Delta en su tarjeta. Esta potencia no se puede usar si Flygon se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi allegare una carta di energia di base o una carta energetica arcobaleno delta dalla tua mano a 1 del tuo poké mon che ha Delta sulla sua carta. Questa potenza non può essere utilizzata se Flygon è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode anexar um cartão de energia básico ou um cartão de energia do Delta Rainbow da sua mão a 1 do seu Poké Mon, que tem delta em seu cartão. Esse poder não pode ser usado se o Flygon for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Metal", "Colorless"],
          name: {
            en: "Swift",
            ja: "迅速",
            fr: "Rapide",
            de: "Schnell",
            es: "Rápido",
            it: "Swift",
            pt: "Swift",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Pächtern, Poké-Körpern oder anderen Auswirkungen auf das verteidigende Pokémon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poké-powers, corpos de poké ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

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
