import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'es-es': "Aggron",
		'it-it': "Aggron",
		'pt-br': "Aggron",
		'de-de': "Stolloss"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Revenge Cannon",
				'fr-fr': "Canon Talion",
				'es-es': "Cañón Venganza",
				'it-it': "Cannonvendetta",
				'pt-br': "Canhão da Vingança",
				'de-de': "Konterkanone"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on all of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Pokémon de Banc.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en todos tus Pokémon en Banca.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui tuoi Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os seus Pokémon no Banco.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf allen Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Buster Swing",
				'fr-fr': "Repoussoir",
				'es-es': "Golpe Destructor",
				'it-it': "Colpaccio",
				'pt-br': "Gingado",
				'de-de': "Widerstandsbrecher"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 120,

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

	description: {
		'en-us': "It claims an entire mountain as its own. The more wounds it has, the more it has battled, so don't take it lightly.",
	},

	thirdParty: {
		cardmarket: 311915,
		tcgplayer: 149091
	}
}

export default card
