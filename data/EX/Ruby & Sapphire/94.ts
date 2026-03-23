import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Schaden, der dem Pokémon, an das Metall-Energie angelegt ist, durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Dieser Effekt wirkt nur, wenn die Metall-Energie an einem Pokémon vom Typ  angelegt ist. Metall-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Les dégâts infligés au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ne tenez pas compte de cet effet si le Pokémon auquel Énergie Métal est attachée n'est pas Métal. Énergie Métal fournit une Énergie Métal (Elle ne compte pas comme Énergie de base).",
	},

	thirdParty: {
		cardmarket: 275742,
		tcgplayer: 87356
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["winner"]
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
