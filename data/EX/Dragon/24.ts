import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camerupt",
		de: "Camerupt"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Super Singe",
				fr: "Ça sent le roussi !",
				de: "Super-Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 84088,
		cardmarket: 275901
	}
}

export default card
