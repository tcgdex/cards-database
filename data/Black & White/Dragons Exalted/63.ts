import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
				de: "Rundumangriff"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reverse Spin",
				fr: "Vrille Renversante",
				de: "Gegendreher"
			},
			effect: {
				en: "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
				fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
				de: "Dein Gegner mischt seine Hand zurück in sein Deck und zieht 4 Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It move by spinning on its foot. It is a rare Pokémon that was discovered in ancient ruins.",
		de: "Es bewegt sich, indem es sich auf seinem Fuß dreht. Ein seltenes Pokémon, das in alten Ruinen lebte."
	},

	thirdParty: {
		cardmarket: 280502,
		tcgplayer: 83718
	}
}

export default card
