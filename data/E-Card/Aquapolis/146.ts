import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Crystal Energy",
		fr: "Énergie cristal",
		de: "Kristall-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Crystal Energy provides 1 Energy of all types (colors) of basic Energy cards attached to the Pokémon Crystal Energy is attached to. If there are no basic Energy cards attached to the Pokémon Crystal Energy is attached to, Crystal Energy provides Colorless Energy.",
		de: "Kristall-Energie liefert 1 Energie aller Typen (Farben) von Basis-Energiekarten, die an das Pokémon angelegt sind, an das Kristall-Energie angelegt ist. Sind an das Pokémon, an das Kristall-Energie angelegt ist, keine Basis-Energiekarten angelegt, liefert Kristall-Energie -Energie.",
		fr: "Énergie cristal fournit 1 Énergie de chaque type (couleur) de cartes Énergie de base attachées ay Pokémon auquel Énergie cristal est attachée. S'il n'y a aucune carte Énergie de base attachée au Pokémon auquel Énergie cristal est attachée, Énergie cristal fournit Incolore.",
	},

	thirdParty: {
		cardmarket: 275222,
		tcgplayer: 84518
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
