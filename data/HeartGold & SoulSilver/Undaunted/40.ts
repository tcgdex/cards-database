import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		de: "Icognito"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "DARK",
				fr: "TÉNÈBRES",
				de: "DARK"
			},
			effect: {
				en: "Once during your turn,when you put Unown from your hand onto your Bench, you may search your deck for a Darkness Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour, lorsque vous prenez Zarbi dans votre main et le placez sur votre Banc, vous pouvez chercher une carte Énergie Darkness dans votre deck, la montrer à votre adversaire et la placer dans votre main. Mélangez ensuite votre deck.",
				de: "Einmal während deines Zuges kannst du, wenn du Icognito von deiner Hand auf deine Bank legst, dein Deck nach 1 -Energiekarte durchsuchen, sie deinem Gegner zeigen und sie auf die Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279293,
		tcgplayer: 90164
	}
}

export default card
