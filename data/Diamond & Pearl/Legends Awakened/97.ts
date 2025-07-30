import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Myrapla",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Space Out",
				fr: "Sonné",
				de: "Abdriften"
			},
			effect: {
				en: "Remove 2 damage counters from Gloom. Gloom is now Asleep.",
				fr: "Retirez à Ortide 2 marqueurs de dégât. Ortide est maintenant Endormi.",
				de: "Entferne 2 Schadensmarken von Duflor. Duflor schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Stinky Nectar",
				fr: "Nectar puant",
				de: "Stinkender Nektar"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt und vergiftet."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "L'odeur du nectar de sa bouche est si répugnante qu'elle agresse les narines à deux kilomètres."
	},

	thirdParty: {
		cardmarket: 278245,
		tcgplayer: 85785
	}
}

export default card
