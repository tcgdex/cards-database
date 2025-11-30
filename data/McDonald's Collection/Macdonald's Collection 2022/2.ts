import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [722],

	hp: 60,

	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Pikser"
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Navalha",
				de: "Rasierblatt"
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

