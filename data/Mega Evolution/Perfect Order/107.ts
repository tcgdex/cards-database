import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Miaouss-ex",
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Prise Dernier Ressort",
			},
			effect: {
				fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent ayant « Dernier Ressort » dans son nom par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Queue Repliée",
			},
			damage: "60",
			effect: {
				fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877524
	}
}

export default card
