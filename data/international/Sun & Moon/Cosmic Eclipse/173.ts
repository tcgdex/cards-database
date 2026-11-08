import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'es-es': "Zangoose",
		'it-it': "Zangoose",
		'pt-br': "Zangoose",
		'de-de': "Sengo"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		335,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
				'es-es': "Puño Tirabuzón",
				'it-it': "Pugno Rotante",
				'pt-br': "Soco Saca-rolha",
				'de-de': "Korkenzieherhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brutal Edge",
				'fr-fr': "Tranche Brutale",
				'es-es': "Filo Brutal",
				'it-it': "Fendente Spietato",
				'pt-br': "Gume Brutal",
				'de-de': "Brutalklinge"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has feuded with Seviper for many generations. Its sharp claws are its biggest weapons.",
	},

	thirdParty: {
		cardmarket: 408489,
		tcgplayer: 201295
	}
}

export default card
