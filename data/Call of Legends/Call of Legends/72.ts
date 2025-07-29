import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		de: "Tangela"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Nutritional Support",
				fr: "Support nutritionnel",
				de: "Nahrungsversorgung"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck 1 carte Énergie Grass et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 -Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck anschließend."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 279715
	}
}

export default card
