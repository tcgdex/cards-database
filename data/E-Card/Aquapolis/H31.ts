import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		de: "Giflor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Scent",
				fr: "Senteur empoisonnée",
				de: "Poison Scent"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné et Confus. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné et Endormi.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Addictive Pollen",
				fr: "Pollen drogué",
				de: "Addictive Pollen"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter pendant son prochain tour.",
				de: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275066,
		tcgplayer: 90377
	}
}

export default card
