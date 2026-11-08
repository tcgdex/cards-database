import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Audino EX",
		'fr-fr': "Nanméouïe EX",
		'es-es': "Audino EX",
		'it-it': "Audino EX",
		'pt-br': "Audino EX",
		'de-de': "Ohrdoch EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drain Slap",
				'fr-fr': "Baffe Sangsue",
				'es-es': "Absorbebofetón",
				'it-it': "Sberlassorbimento",
				'pt-br': "Bofetada Drenagem",
				'de-de': "Watschensauger"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
				'fr-fr': "Faites la Vague",
				'es-es': "Hacer la Ola",
				'it-it': "Fare la Ola",
				'pt-br': "Fazer a \"Ola\"",
				'de-de': "Wellenreiten"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada Pokémon no Banco do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289905,
		tcgplayer: 117513
	}
}

export default card
