import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Cadoizo",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "sui",

	set: Set,
	dexId: [225],
	hp: 90,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Nombreux Cadeaux"
			},
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, vous pouvez chercher une carte dans votre deck puis l'ajouter à votre main. Mélangez ensuite votre deck."
			}
		},
		{
			cost: ["Water"],
			name: {
				fr: "Attaque Surprise"
			},
			damage: 40,
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362783,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362783,
			}
		}
	]
}

export default card

