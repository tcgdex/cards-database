import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Dragonite",
		fr: "Dracolosse obscur",
		de: "Dunkles Dragoran"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Summon Minions",
				fr: "Convocation de serviteurs",
				de: "Summon Minions"
			},
			effect: {
				en: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez Dracolosse obscur depuis votre main, cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				de: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Giant Tail",
				fr: "Longue queue",
				de: "Giant Tail"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Flip a coin. If tails, this attack does nothing."
			},

			damage: 70
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il est parfois appelé \"Le dieu destructeur\". Ses ailes le supportent en dépit de sa masse imposante."
	},

	thirdParty: {
		cardmarket: 274058,
		tcgplayer: 84587
	}
}

export default card
