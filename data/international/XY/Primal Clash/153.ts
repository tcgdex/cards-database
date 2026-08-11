import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Aggron EX",
		'fr-fr': "Galeking EX",
		'es-es': "Aggron EX",
		'it-it': "Aggron EX",
		'pt-br': "Aggron EX",
		'de-de': "Stolloss EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steel Headbutt",
				'fr-fr': "Coup d'Boule d'Acier",
				'es-es': "Cabezazo de Acero",
				'it-it': "Bottintesta d'Acciaio",
				'pt-br': "Cabeçada de Aço",
				'de-de': "Stahlkopfstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Hammer",
				'fr-fr': "Marteau Rageur",
				'es-es': "Martillo Furioso",
				'it-it': "Martelfuria",
				'pt-br': "Martelo Feroz",
				'de-de': "Wuthammer"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Esse ataque causa 10 de danos adicionais para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273624,
		tcgplayer: 96051
	}
}

export default card
