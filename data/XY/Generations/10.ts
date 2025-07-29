import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Leafeon EX",
		fr: "Phyllali-EX",
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 170,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-Feuille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Nature's Breath",
				fr: "Souffle de la Nature",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 more damage and heal 30 damage from this Pokémon.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288452
	}
}

export default card
