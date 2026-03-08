import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Floating Electrons",
				fr: "Électrons flottants",
				de: "Schwebende Elektronen"
			},
			effect: {
				en: "As long as Voltorb has any Energy attached to it, Voltorb's Retreat Cost is 0.",
				fr: "Tant que Voltorbe possède des Énergies, son Coût de Retraite est de 0.",
				de: "Wenn mindestens 1 Eneregie an Voltobal angelegt ist, hat Voltobal Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276261,
		tcgplayer: 90414
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
