import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		de: "Krebutack"
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
		en: "Corphish",
		fr: "Écrapince"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Protection",
				fr: "Protection obscure",
				de: "Dark Protection"
			},
			effect: {
				en: "Any damage done to Crawdaunt by your opponent's attacks is reduced by 10 for each Darkness Energy attached to Crawdaunt (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
				fr: "Tous dégâts infligés à Colhomard par une attaque de votre adversaire sont réduits de 10 pour chaque Énergie  attachée à Colhomard (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas réduire de plus de 20 dégâts de cette façon.",
				de: "Any damage done to Crawdount by your opponent's attacks is reduced by 10 for each  Energy attached to Crawdount (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way."
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
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Bubblebeam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
				en: "Cross-Cut",
				fr: "Coupe transversale",
				de: "Cross-Cut"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage."
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

	thirdParty: {
		tcgplayer: 84463,
		cardmarket: 276409
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
