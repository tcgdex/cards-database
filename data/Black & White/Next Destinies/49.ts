import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Emolga",
		fr: "Emolga",
		es: "Emolga",
		it: "Emolga",
		pt: "Emolga",
		de: "Emolga"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Rebond",
				de: "Sprungfeder"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The energy made in its cheeks' electric pouches is stored inside its membrane and released while it is gliding.",
		de: "Im Flug entlädt es Strom, den es mit seinen Backentaschen erzeugt und in seinen Fluglappen gespeichert hat."
	},

	thirdParty: {
		cardmarket: 280274,
		tcgplayer: 85190
	}
}

export default card
