import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Flaaffy",
		fr: "Lainergie obscur",
		de: "Dunkles Waaty"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mareep",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "High Voltage",
				fr: "Haut voltage",
				de: "High Voltage"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur pendant son prochain tour.",
				de: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Stun Wave",
				fr: "Para-vague",
				de: "Stun Wave"
			},
			effect: {
				en: "If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn.",
				fr: "Si le Pokémon Défenseur a un Pouvoir Pokémon, ce pouvoir cesse de fonctionner jusqu'à la fin de votre prochain tour.",
				de: "If the Defending Pokémon has a Pokémon Power, that Power stops working until the end of your next turn."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "À cause des énormes quantités d'électricité qu'il stocke, sa laine ne pousse plus à certains endroits de son corps."
	},

	thirdParty: {
		cardmarket: 274686,
		tcgplayer: 84595
	}
}

export default card
