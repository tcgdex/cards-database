import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Flambusard",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	stage: "Stage2",
	evolveFrom: {
		fr: "Braisillon",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Chasse Céleste",
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Aile de Feu",
			},
			damage: "110",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "OKACHEKE",

	thirdParty: {
		cardmarket: 877508
	}
}

export default card
