import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Manectric",
		fr: "Elecsprint de Team Aqua",
		de: "Team Aquas Voltenso"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Aqua Beam",
				fr: "Aqua-laser",
				de: "Aqua Beam"
			},
			effect: {
				en: "If the Defending Pokémon has Team Magma's in its name, the Defending Pokémon is now Confused.",
				fr: "Si le nom du Pokémon Défenseur comporte Team Magma, le Pokémon Défenseur est maintenant Confus.",
				de: "If the Defending Pokémon has Team Magma in its name, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chaos Crush",
				fr: "Écrasement chaotique",
				de: "Chaos Crush"
			},
			effect: {
				en: "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est Confus, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275981,
		tcgplayer: 89791
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
