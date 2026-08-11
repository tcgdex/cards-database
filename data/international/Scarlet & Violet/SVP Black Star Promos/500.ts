import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Terapagos & Friends",
	},
	rarity: "Promo",
	category: "Pokemon",
	types: ["Colorless"],
	hp: 90,
	stage: "Basic",
	dexId: [1024, 25, 906, 909, 912],
	illustrator: "Yamazaki Rei",

	attacks:[
		{
			cost: ["Colorless","Colorless","Colorless","Colorless"],
			name: {
				'en-us': "A Grand Adventure with Friends",
			},
			effect:{
				'en-us': "This attack does 100 damage for each of your Pokémon in play."
			},
			damage: "100×",
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			size: "jumbo",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 784943,
				tcgplayer: 595035
			}
		},
	]
}

export default card
