import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Dimoclès",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Monorpale",
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Épées Armes",
			},
			damage: "60×",
			effect: {
				fr: "Montrez le nombre voulu de Monorpale, de Dimoclès et d'Exagide de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Anesaki Dynamic",

	thirdParty: {
		cardmarket: 877515
	}
}

export default card
