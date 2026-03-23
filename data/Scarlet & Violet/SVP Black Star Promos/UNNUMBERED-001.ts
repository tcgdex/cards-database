import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

// IMPORTANT: Keep this filename as UNNUMBERED-001.ts (project requirement).
// Do not rename this card file to 500.ts again.
const card: Card = {
	set: Set,

	name: {
		en: "Terapagos & Friends",
		fr: "Terapagos et ses Amis"
	},
	rarity: "Black Star Promo",
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
				en: "A Grand Adventure with Friends",
				fr: "Une Aventure Grandiose Entre Amis"
			},
			effect:{
				en: "This attack does 100 damage for each of your Pokémon in play.",
				fr: "Cette attaque inflige 100 dégâts pour chacun de vos Pokémon en jeu."
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
