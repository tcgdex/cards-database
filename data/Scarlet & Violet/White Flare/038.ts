import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		de: "Symvolara",
		it: "Sigilyph",
		pt: "Sigilyph",
		es: "Sigilyph",
		'es-mx': "Sigilyph"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Reflect",
			fr: "Protection",
			de: "Reflektor",
			it: "Riflesso",
			pt: "Refletir",
			es: "Reflejo",
			'es-mx': "Reflejo"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 40 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 40 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Telekinesis",
			fr: "Lévikinésie",
			de: "Telekinese",
			it: "Telecinesi",
			pt: "Telecinese",
			es: "Telequinesis",
			'es-mx': "Telequinesis"
		},

		effect: {
			en: "This attack does 70 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 70 dégâts à l'un des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 70 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			it: "Questo attacco infligge 70 danni a uno dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "Este ataque causa 70 pontos de dano a 1 dos Pokémon do seu oponente. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			es: "Este ataque hace 70 puntos de daño a uno de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'es-mx': "Este ataque hace 70 puntos de daño a 1 de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
		}
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card