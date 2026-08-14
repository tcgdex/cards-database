import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tool Drop",
				fr: "Chute d’Outils",
				de: "Ausrüstungssturz"
			},
			effect: {
				en: "Does 20 damage for each Pokémon Tool card attached to Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 20 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon en jeu (les vôtres et ceux de votre adversaire).",
				de: "Dieser Angriff fügt für jede an Pokémon im Spiel (an deine und die deines Gegners) angelegte Pokémon-Ausrüstung 20 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Wanting more garbage, they follow people who litter. They always belch poison gas.",
		de: "Um an frischen Müll zu kommen, heftet es sich Umweltsündern an die Fersen. Es speit unaufhörlich giftige Gase."
	},

	thirdParty: {
		cardmarket: 280803,
		tcgplayer: 90069
	}
}

export default card
