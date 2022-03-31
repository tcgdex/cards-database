import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Marowak BREAK",
		fr: "Ossatueur TURBO",
		es: "Marowak TURBO",
		it: "Marowak TURBO",
		pt: "Marowak TURBO",
		de: "Knogga-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bone Revenge",
				fr: "Os Vengeance",
				es: "Desquite Óseo",
				it: "Vendetta Ossea",
				pt: "Vingança de Ossos",
				de: "Knochenrache"
			},
			effect: {
				en: "This attack does 40 more damage for each Prize card your opponent has taken.",
				fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
				es: "Este ataque hace 40 puntos de daño más por cada carta de Premio que haya tomado tu rival.",
				it: "Questo attacco infligge 40 danni in più per ogni carta Premio presa dal tuo avversario.",
				pt: "Este ataque causa 40 de danos adicionais para cada card de Prêmio conquistado por seu oponente.",
				de: "Dieser Angriff fügt 40 weitere Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat."
			},
			damage: "20+",

		}
	],

	retreat: 0
}

export default card
