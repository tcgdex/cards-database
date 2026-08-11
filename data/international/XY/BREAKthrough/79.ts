import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Marowak BREAK",
		'fr-fr': "Ossatueur TURBO",
		'es-es': "Marowak TURBO",
		'it-it': "Marowak TURBO",
		'pt-br': "Marowak TURBO",
		'de-de': "Knogga-TURBO"
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
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'es-es': "Marowak",
		'it-it': "Marowak",
		'pt-br': "Marowak",
		'de-de': "Knogga"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Bone Revenge",
				'fr-fr': "Os Vengeance",
				'es-es': "Desquite Óseo",
				'it-it': "Vendetta Ossea",
				'pt-br': "Vingança de Ossos",
				'de-de': "Knochenrache"
			},
			effect: {
				'en-us': "This attack does 40 more damage for each Prize card your opponent has taken.",
				'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
				'es-es': "Este ataque hace 40 puntos de daño más por cada carta de Premio que haya tomado tu rival.",
				'it-it': "Questo attacco infligge 40 danni in più per ogni carta Premio presa dal tuo avversario.",
				'pt-br': "Este ataque causa 40 de danos adicionais para cada card de Prêmio conquistado por seu oponente.",
				'de-de': "Dieser Angriff fügt 40 weitere Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat."
			},
			damage: "20+",

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286325,
		tcgplayer: 107198
	}
}

export default card
