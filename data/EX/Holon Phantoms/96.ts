import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Multi Energy",
		fr: "Énergies multiples",
		de: "Multi-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege Multi-Energie an 1 deiner Pokémon an. Während Multi-Energie im Spiel ist, zählt sie als jeder beliebige Basis-Energietyp, spendet aber immer nur eine Energie auf einmal. (Sie hat keinen Effekt, außer dass sie Energie spendet.) Multi-Energie zählt als -Energie, falls sie an ein Pokémon angelegt wird, an dem bereits eine Spezialenergiekarte angelegt ist.",
		fr: "Attachez Énergies multiples à 1 de vos Pokémon. Lorsqu'elle est en jeu, Énergies multiples fournit tous les types d'énergie (mais seulement un à la fois). (Elle n'a pas d'autre effet que de fournir de l'Énergie.) Énergies multiples fournit une Énergie Incolore lorsqu'elle est attachée à un Pokémon qui possède déjà des cartes Énergie Spéciales.",
	},

	thirdParty: {
		cardmarket: 277066,
		tcgplayer: 87632
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
