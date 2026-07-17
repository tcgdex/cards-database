import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "When it encounters foes, it launches the many seeds stored in its beak in a radial burst.",
		de: "Trifft es auf Feinde, feuert es eine Salve Samen, die es in seinem Schnabel angesammelt hat, auf sie ab."
	},

	name: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		'es-mx': "Trumbeak",
		de: "Trompeck"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [732],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pikipek"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fly",
			de: "Fliegen"
		},

		cost: ["Colorless"],

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895851,
				tcgplayer: 704824
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895851,
				tcgplayer: 704824
			}
		},
	],
}

export default card
