import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Signal",
				fr: "Signal d'énergie",
			},
			effect: {
				en: "When you attach a Grass Energy card or Psychic Energy card from your hand to Roserade during your turn, you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Confused. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can’t be used if Roserade is affected by a Special Condition.",
				fr: "Lorsque vous attachez une carte Énergie Grass ou Énergie Psychic de votre main à Roserade, vous pouvez utiliser ce pouvoir. Si vous attachez une carte Énergie Grass, le Pokémon Défenseur est maintenant Confus. Si vous attachez une carte Énergie Psychic, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Roserade est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Roserade.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées à Roserade.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
