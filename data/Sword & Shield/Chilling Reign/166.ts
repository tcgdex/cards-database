import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Zeraora V",
		fr: "Zeraora V"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,
	dexId: [807],

	types: [
		"Lightning",
	],

	stage: 'Basic',
	suffix: 'V',

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Cross Fist",
				fr: "Poings Croisés"
			},
			effect: {
				en: "If 1 of your other Rapid Strike Pokémon used an attack during your lat turn, this attack also does 160 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si l'un de vos autres Pokémon Mlle Poings a utilisé une attaque pendant votre dernier tour, cette attque infligue aussie 160 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 100
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "E"
}

export default card
