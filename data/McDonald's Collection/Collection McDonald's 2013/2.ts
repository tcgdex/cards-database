import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Pyroli",
	},
	illustrator: "Rya Ueda",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [136],
	hp: 90,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Jet de Sable",
			},
			effect: {
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				fr: "Flamme Tranchante",
			},
			effect: {
				fr: "Vous pouvez défausser une Energie feu & attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires",
			},
			damage: "60+",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361722,
			}
		}
	]
}

export default card
