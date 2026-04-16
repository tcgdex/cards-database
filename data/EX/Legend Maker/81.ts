import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
		de: "Regenbogen Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege Regenbogen-Energie an 1 deiner Pokémon an. Während Regenbogen-Energie im Spiel ist, zählt sie als jeder beliebige Basis-Energietyp, spendet aber immer nur eine Energie auf einmal. (Zählt nicht als Basis-Energie, wenn sie nicht im Spiel ist.) Lege eine Schadensmarke auf das Pokémon, an das du diese Karte von der Hand anlegst.",
		fr: "Attachez Énergie Multicolore à 1 de vos Pokémon. Lorsqu'elle est en jeu, Énergie Multicolore fournit tous les types d'Énergie mais seulement 1 Énergie à la fois (Elle n'a pas d'autre effet que de fournir de l'Énergie.) Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, placez 1 marqueur de dégât sur ce Pokémon.",
	},

	thirdParty: {
		cardmarket: 276958,
		tcgplayer: 88546
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
