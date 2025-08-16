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
		de: "Lege Regenbogen-Energie an 1 deiner Pokémon an. Während Regenbogen-Energie im Spiel ist, zählt sie als jeder beliebige Basis-Energietyp, spendet aber immer nur eine Energie auf einmal. (Zählt nicht als Basis-Energie, wenn sie nicht im Spiel ist.) Lege eine Schadensmarke auf das Pokémon, an das du diese Karte von der Hand anlegst."
	},

	thirdParty: {
		cardmarket: 275743,
		tcgplayer: 88545
	}
}

export default card
