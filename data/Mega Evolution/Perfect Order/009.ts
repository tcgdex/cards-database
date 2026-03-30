import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Prismillon",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	stage: "Stage2",
	evolveFrom: {
		fr: "Pérégrain",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Aile Grandiose",
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre adversaire mélange sa main, puis la place en dessous de son deck. Si au moins une carte est placée en dessous de son deck de cette façon, votre adversaire pioche 4 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Grosse Bourrasque",
			},
			damage: "60+",
			effect: {
				fr: "Si un Stade est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "mingo",

	thirdParty: {
		cardmarket: 877421
	}
}

export default card
