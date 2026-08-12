import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
		de: "Wattzapf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				de: "Nagen"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Stun Needle",
				fr: "Para-Dard",
				de: "Betäubungsnadel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
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

	retreat: 0,

	description: {
		en: "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
		de: "Wird es angegriffen, spuckt es mit vielen elektrisch geladenen Fäden um sich und baut sich eine Elektrobarriere."
	},

	thirdParty: {
		cardmarket: 279999,
		tcgplayer: 85611
	}
}

export default card
