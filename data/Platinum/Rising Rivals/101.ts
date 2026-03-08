import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "SP Energy",
		fr: "Énergie SP",
		de: "SP-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Énergie SP fournit de l'Énergie Colorless. Si le Pokémon auquel Énergie SP est attachée est un Pokémon SP, Énergie SP fournit tous les types d'Énergie mais fournit 1 Énergie à la fois. (Elle ne compte pas comme carte Énergie de base).",
		de: "SP-Energie liefert -Energie. Solange das Pokémon, an dem SP-Energie angelegt ist, ein Pokémon SP ist, zählt SP-Energie als jeder beliebige Energietyp, spendet aber immer nur eine Energie auf einmal. (Zählt nicht als Basis-Energiekarte.)"
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278675,
		tcgplayer: 89433
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		}
	]
}

export default card
