import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dragonair",
		fr: "Draco lumineux",
		de: "Helles Dragonir"
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
		en: "Dratini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Light",
				fr: "Lumière soignante",
				de: "Healing Light"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.",
				fr: "Retirez un marqueur de dégât de chacun de vos Pokémon ayant des marqueurs de dégâts.",
				de: "Remove 1 damage counter from each of you Pokémon that has any damage counters on it."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Protective Wave",
				fr: "Onde protectrice",
				de: "Protective Wave"
			},

			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Draco lumineux.",
				de: "Flip a coin. If heads, during your opponent's turn, prevent all effects of attacks, including damage, done to Light Dragonair."
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

	description: {
		fr: "L'aura qui enveloppe son corps a un effet sur la météo et le climat environnants."
	},

	thirdParty: {
		cardmarket: 274674,
		tcgplayer: 86737
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
