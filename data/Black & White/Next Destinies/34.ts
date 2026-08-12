import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Frillish",
		fr: "Viskuse",
		es: "Frillish",
		it: "Frillish",
		pt: "Frillish",
		de: "Quabbel"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		592,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spit Poison",
				fr: "Crache-Venin",
				de: "Giftspucke"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "They paralyze prey with poison, then drag them down to their lairs, five miles below the surface.",
		de: "Es lähmt seine Beute mit Gift und verschleppt sie in seinen Unterschlupf, acht Kilometer unter dem Meeresspiegel."
	},

	thirdParty: {
		cardmarket: 280259,
		tcgplayer: 85564
	}
}

export default card
