import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Outrage",
				'fr-fr': "Colère",
				'es-es': "Enfado",
				'it-it': "Oltraggio",
				'pt-br': "Ultraje",
				'de-de': "Wutanfall"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Scorching Breath",
				'fr-fr': "Souffle Brûlant",
				'es-es': "Aliento Ígneo",
				'it-it': "Soffio Ustionante",
				'pt-br': "Hálito Ardente",
				'de-de': "Sengender Atem"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth.",
	},

	thirdParty: {
		cardmarket: 301165,
		tcgplayer: 146667
	}
}

export default card
