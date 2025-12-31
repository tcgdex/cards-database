import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "δ Rainbow Energy",
		fr: "Énergie Multicolore δ",
		de: "Delta Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "δ Regenbogen-Energie liefert  Energie. Wenn sie an ein Pokémon angelegt ist, auf dem δ zu sehen ist, zählt sie als jede beliebige Basis-Energietyp, spendet aber immer nur 1 Energie auf einmal. (Sie hat keinen Effekt, außer dass sie Energie spendet.)"
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
