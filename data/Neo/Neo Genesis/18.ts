import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Fire Boost",
				fr: "Attise feu",
				de: "Fire Boost"
			},
			effect: {
				en: "When you play Typhlosion from your hand, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to Typhlosion. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez Typhlosion depuis votre main, vous pouvez lancer une pièce. Si c'est face, cherchez jusqu'à 4 cartes Énergie  et attachez-les à Typhlosion. Mélangez ensuite votre deck.",
				de: "When you play Typhlosion from your hand, you may flip a coin. If heads, search your deck for up to 4 @fire Energy cards and attach them to Typhlosion. Shuffle your deck afterward."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Wheel",
				fr: "Roue de flammes",
				de: "Flame Wheel"
			},
			effect: {
				en: "Discard 3 Energy cards attached to Typhlosion in order to use this attack. Do 20 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 3 cartes Énergie  attachées à Typhlosion afin de pouvoir utiliser cette attaque. Inflige 20 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Discard 3  Energy cards attached to Typhlosion in order to use this attack. Do 20 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il possède une botte secrète dévastatrice. Il frotte sa fourrure de flamme pour provoquer de gigantesques explosions."
	},

	thirdParty: {
		cardmarket: 274417,
		tcgplayer: 90099
	}
}

export default card
