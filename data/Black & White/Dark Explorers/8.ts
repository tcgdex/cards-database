import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Crustle",
		fr: "Crabaraque",
		es: "Crustle",
		it: "Crustle",
		pt: "Crustle",
		de: "Castellith"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		558,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Bullet",
				fr: "Projectile Lourd"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâs à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280336,
		tcgplayer: 84509
	}
}

export default card
