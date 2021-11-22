import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Togetic",
		fr: "Togetic lumineux"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togepi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Gift",
				fr: "Don"
			},
			effect: {
				en: "When you play Light Togetic from your hand, your opponent may search his or her deck for a Pokémon Tool card, show that card to you, and put it into his or her hand. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
				fr: "Quand vous jouez Togetic lumineux depuis votre main, votre adversaire peut chercher dans son deck une carte Outil Pokémon, vous la montrer et l'ajouter à sa main. Quelle que soit sa décision, vous pouvez faire de même, et chaque joueur ayant agi ainsi mélange ensuite son deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux baiser"
			},
			effect: {
				en: "Your opponent may draw a card.",
				fr: "Votre adversaire peut piocher une carte."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il devient rapidement déprimé s'il n'est pas près de personnes au grand cœur. Il peut flotter dans les airs sans bouger ses ailes."
	}
}

export default card
