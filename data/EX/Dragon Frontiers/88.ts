import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "δ Rainbow Energy",
		fr: "Énergie Multicolore δ",
		de: "δ Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "δ Regenbogen-Energie liefert  Energie. Wenn sie an ein Pokémon angelegt ist, auf dem δ zu sehen ist, zählt sie als jeder beliebige Basis-Energietyp, spendet aber immer nur 1 Energie auf einmal. (Sie hat keinen Effekt, außer dass sie Energie spendet.)",
		fr: "Énergie Multicolore δ fournit de l'Énergie Incolore. Lorsqu'elle est attachée à un Pokémon possédant le symbole δ, elle fournit tous les types d'Énergie mais seulement 1 Énergie à la fois. (Elle n'a pas d'autre effet que de fournir de l'Énergie.)",
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
