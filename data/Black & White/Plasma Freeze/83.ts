import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deafen",
				fr: "Rendre Sourd",
				de: "Ohren betäuben"
			},
			effect: {
				en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten von seiner Hand spielen."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healwing",
				fr: "Aile Soin",
				de: "Heilschwinge"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
		de: "Man sagt, es lebe in den Meeren. Es bringt Schiffbrüchige sicher an Land."
	},

	thirdParty: {
		cardmarket: 280961,
		tcgplayer: 84916
	}
}

export default card
