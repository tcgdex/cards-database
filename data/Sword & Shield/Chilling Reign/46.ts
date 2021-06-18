import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Ice Rider Calyrex VMAX",
		fr: "Sylveroy Cavalier du Froid VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,
	dexId: [898],

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Ice Rider Calyrex V",
		fr: 'Sylveroy Cavalier du Froid-V'
	},

	stage: 'VMAX',

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ride of the High King",
				fr: "Chevauchée Impériale"
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			},
			damage: '10+'
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Max Lance",
				fr: "Lançomax"
			},
			effect: {
				en: "You may discard up to 2 Energy from this Pokémon. If you do, this attack does 120 more damage for each card you discarded in this way.",
				fr: "Vous pouvez défausser jusqu’à 2 Énergies de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
			damage: '10+'
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 2,
	regulationMark: "E"
}

export default card
