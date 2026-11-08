import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
		'es-es': "Xerneas",
		'it-it': "Xerneas",
		'pt-br': "Xerneas",
		'de-de': "Xerneas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Force",
				'fr-fr': "Force Arc-en-Ciel",
				'es-es': "Fuerza Arcoíris",
				'it-it': "Forzarcobaleno",
				'pt-br': "Força de Arco-Íris",
				'de-de': "Regenbogenkraft"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each different type of Pokémon on your Bench.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada tipo de Pokémon diferente en tu Banca.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon di tipo diverso nella tua panchina.",
				'pt-br': "Esta ataque causa 30 de danos adicionais para cada tipo diferente de Pokémon no seu Banco.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte für jedes vom Typ her unterschiedliche Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Creation",
				'fr-fr': "Création de Puissance",
				'es-es': "Poder Creación",
				'it-it': "Forza Vitale",
				'pt-br': "Criação de Poder",
				'de-de': "Krafterzeuger"
			},
			effect: {
				'en-us': "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When the horns on its head shine in seven different colors, it is said to be sharing everlasting life.",
	},

	thirdParty: {
		cardmarket: 286353,
		tcgplayer: 107226
	}
}

export default card
