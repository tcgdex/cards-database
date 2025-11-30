import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Terapagos & Friends",
	},
	rarity: "None",
	category: "Pokemon",
	types: ["Colorless"],
	hp: 90,
	stage: "Basic",
	// Terapagos (1024), Pikachu (25), Sprigatito (906), Fuecoco (909), Quaxly (912)
	dexId: [1024, 25, 906, 909, 912],
	illustrator: "Yamazaki Rei",

	attacks:[
		{
			cost: ["Colorless","Colorless","Colorless","Colorless"],
			name: {
				en: "A Grand Adventure with Friends",
			},
			effect:{
				en: "This attack does 100 damage for each of your Pokémon in play."
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
			stamp: ["horizons"]
		},
	]
}

export default card
