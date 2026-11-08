import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Froslass",
		'de-de': "Frosdedje"
	},

	illustrator: "TOKIYA",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [478],
	
	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Snorunt"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Snow Gift",
				'de-de': "Schneegeschenk"
			},
			effect: {
				'en-us': "Once during your turn, when you play Froslass from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'de-de': "Einmal während deines Zuges, wenn du Frosdedje von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach 1 belibigen Karte durchsuchen und sie auf die Hand nehmen. Mische dein Deck danach."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ground Frost",
				'de-de': "Bodenfrost"
			},
			effect: {
				'en-us': "If there is any Stadium Card in play, this attack does nothing.",
				'de-de': "Wenn sich eine Stadion-Karte im Spiel befindet, hat dieser Angriff keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It freezes prey by blowing its -58 degrees F breath. It is said to then secretly display its prey."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85573,
				cardmarket: 278874
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278874,
				tcgplayer: 85573
			}
		},
	],

}

export default card
