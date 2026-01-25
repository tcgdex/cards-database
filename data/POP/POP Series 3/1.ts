import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour fracassant"
			},
			effect: {
				en: "After your attack, you may switch Blastoise with 1 of your Benched Pokémon.",
				fr: "Après votre attaque, vous pouvez échanger Tortank avec 1 des Pokémon de votre Banc."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Tackle",
				fr: "Lance roquette"
			},
			effect: {
				en: "Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Blastoise by attacks during your opponent’s next turn.",
				fr: "Tortank s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Tortank par des attaques lors du prochain tour de votre adversaire."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277449,
		tcgplayer: 83891
	}
}

export default card
