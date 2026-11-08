import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'de-de': "Krebutack"
	},

	illustrator: "Tomoko Wakai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark Protection",
				'fr-fr': "Protection obscure",
				'de-de': "Dark Protection"
			},
			effect: {
				'en-us': "Any damage done to Crawdaunt by your opponent's attacks is reduced by 10 for each Darkness Energy attached to Crawdaunt (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
				'fr-fr': "Tous dégâts infligés à Colhomard par une attaque de votre adversaire sont réduits de 10 pour chaque Énergie  attachée à Colhomard (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas réduire de plus de 20 dégâts de cette façon.",
				'de-de': "Any damage done to Crawdount by your opponent's attacks is reduced by 10 for each  Energy attached to Crawdount (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubblebeam",
				'fr-fr': "Bulles d'O",
				'de-de': "Bubblebeam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross-Cut",
				'fr-fr': "Coupe transversale",
				'de-de': "Cross-Cut"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84463,
				cardmarket: 276409
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84463,
				cardmarket: 276409
			},
		},
	],

}

export default card
