import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Froslass",
		de: "Frosdedje"
	},

	illustrator: "TOKIYA",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		478,
	],
	
	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Snow Gift",
				de: "Schneegeschenk"
			},
			effect: {
				en: "Once during your turn, when you play Froslass from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				de: "Einmal während deines Zuges, wenn du Frosdedje von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach 1 belibigen Karte durchsuchen und sie auf die Hand nehmen. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ground Frost",
				de: "Bodenfrost"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does nothing.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, hat dieser Angriff keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 278874,
		tcgplayer: 85573
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		}
	]
}

export default card
