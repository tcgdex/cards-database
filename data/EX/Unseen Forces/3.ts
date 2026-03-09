import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor",
		de: "Blubella"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Green Dance",
				fr: "Danse verte",
				de: "Green Dance"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If you put any Grass Pokémon into your hand, you may switch Bellossom with 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon , montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck. Si vous placez un Pokémon  dans votre main, vous pouvez échanger Joliflor avec 1 des Pokémon de votre Banc.",
				de: "Search your deck for up to 2  Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If you put any  Pokémon into your hand, you may switch Bellossom with 1 of your Benched Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Bloom",
				fr: "Épanouissement",
				de: "Full Bloom"
			},
			effect: {
				en: "If you have at least 3 Bellossom in play, this attack does 50 damage plus 50 more damage.",
				fr: "Si vous avez au moins 3 Joliflor en jeu, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				de: "If you have at least 3 Bellossom in play, this attack does 50 damage plus 50 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276649,
		tcgplayer: 83799
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
