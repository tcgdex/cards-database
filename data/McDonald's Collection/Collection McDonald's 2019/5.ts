import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Noadkoko d'Alola",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Satoshi Shirai",

	set: Set,
	dexId: [103],
	hp: 160,
	types: ["Grass"],


	evolveFrom: {
		fr: "Noeunoeuf"
	},
	stage: "Stage1",
	retreat: 3,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				fr: "Balancement Tropical"
			},
			damage: "20+",
			effect: {
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type de carte Énergie de base dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479694,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581848,
			}
		}
	]
}

export default card

