import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Dragonair",
		'fr-fr': "Draco lumineux",
		'de-de': "Helles Dragonir"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Healing Light",
				'fr-fr': "Lumière soignante",
				'de-de': "Healing Light"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.",
				'fr-fr': "Retirez un marqueur de dégât de chacun de vos Pokémon ayant des marqueurs de dégâts.",
				'de-de': "Remove 1 damage counter from each of you Pokémon that has any damage counters on it."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Protective Wave",
				'fr-fr': "Onde protectrice",
				'de-de': "Protective Wave"
			},

			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Draco lumineux.",
				'de-de': "Flip a coin. If heads, during your opponent's turn, prevent all effects of attacks, including damage, done to Light Dragonair."
			},

			damage: 20
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "The aura it projects from its body has an effect on the surrounding climate and weather.",
		'fr-fr': "L'aura qui enveloppe son corps a un effet sur la météo et le climat environnants."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274674,
				tcgplayer: 86737
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274674,
				tcgplayer: 86737
			}
		}
	]
}

export default card
