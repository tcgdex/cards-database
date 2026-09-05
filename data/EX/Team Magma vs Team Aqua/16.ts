import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sealeo",
		fr: "Phogleur de Team Aqua",
		de: "Team Aquas Seejong"
	},

	illustrator: "T. Honda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [364],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Trance",
				fr: "Aqua-transe",
				de: "Aquatrance"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Endormi.",
				de: "Nach dem nächsten Zug deines Gegner schläft das Verteidigende Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Super Hypnoblast",
				fr: "Super hypno-rafale",
				de: "Super Hypnoschuss"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon schläft, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275793,
				tcgplayer: 89796
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275793,
				tcgplayer: 89796
			}
		},
	],

}

export default card
