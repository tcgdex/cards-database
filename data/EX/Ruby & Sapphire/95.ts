import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

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
		fr: "Attachez Énergie Multicolore à un de vos Pokémon. Lorsqu'elle est en jeu, cette carte fournit tous les types d'Énergie. (Elle ne compte pas comme Énergie de base lorsqu'elle n'est pas en jeu). Lorsque vous attachez cette carte de votre main à un de vos Pokémon, placez un marqueur de dégât sur ce Pokémon.",
	},

	thirdParty: {
		cardmarket: 275743,
		tcgplayer: 88545
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
