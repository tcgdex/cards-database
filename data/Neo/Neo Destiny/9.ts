import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Scizor",
		fr: "Cizayox obscur",
		de: "Dunkles Scherox"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Threaten",
				fr: "Menace",
				de: "Threaten"
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire. S'il a des cartes Dresseur, choisissez-en une. Votre adversaire mélange cette carte à son deck.",
				de: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
	],

	description: {
		fr: "Rien ne peut résister à la pression des griffes d'acier de ce Pokémon, aussi puissantes qu'un étau."
	},

	thirdParty: {
		cardmarket: 274661,
		tcgplayer: 84652
	}
}

export default card
