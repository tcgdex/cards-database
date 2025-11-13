import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Scramble Energy",
		fr: "Énergie codée",
		de: "Misch-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Misch-Energie kann nur an ein entwickeltes Pokémon (außer Pokémon-ex) angelegt werden. Misch-Energie liefert -Energie. Während Misch-Energie im Spiel ist und du mehr Preise übrig hast als dein Gegner, zählt sie als jeder beliebige Energietyp, spendet aber 3 Energien in beliebiger Kombination auf einmal. Handelt es sich bei dem Pokémon, an dem Misch-Energie angelegt ist, nicht mehr um ein entwickeltes Pokémon (oder entwickelt es sich in ein Pokémon-ex), dann lege Misch-Energie auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277294,
		tcgplayer: 88989
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
			stamp: ["akira-miyazaki"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
