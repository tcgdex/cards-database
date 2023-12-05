import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

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
		de: "Lege Multi-Energie an 1 deiner Pokémon an. Während Multi-Energie im Spiel ist, zählt sie als jeder beliebige Basis-Energietyp, spendet aber immer nur eine Energie auf einmal. (Sie hat keinen Effekt, außer dass sie Energie spendet.) Multi-Energie zählt als -Energie, falls sie an ein Pokémon angelegt wird, an dem bereits eine Spezialenergiekarte angelegt ist."
	}
}

export default card
