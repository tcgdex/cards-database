import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cyrus's Conspiracy",
		fr: "Le complot d'Hélio",
		de: "Zyrus' Komplott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre deck une carte Supporter, une carte Énergie et une carte Dresseur dont le nom comporte Invention de Team Galaxie. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Search your deck for a Supporter card, a basic Energy card, and a Trainer card that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278526,
		tcgplayer: 84557
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type:"normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type:"normal",
			stamp: ["yuta-komatsuda"]
		}
	]
}

export default card
