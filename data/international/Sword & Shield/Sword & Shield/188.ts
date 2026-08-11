import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Torkoal V",
		'fr-fr': "Chartor V",
		'es-es': "Torkoal V",
		'it-it': "Torkoal V",
		'pt-br': "Torkoal V",
		'de-de': "Qurtel V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion Pillar",
				'fr-fr': "Pilastre de Combustion",
				'es-es': "Columna Combustión",
				'it-it': "Colonna di Fuoco",
				'pt-br': "Coluna em Combustão",
				'de-de': "Brandsäule"
			},
			effect: {
				'en-us': "Discard the top card of your deck. If that card is a Fire Energy card, this attack does 90 more damage.",
				'fr-fr': "Défaussez la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Fire, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía Fire, este ataque hace 90 puntos de daño más.",
				'it-it': "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia Fire, questo attacco infligge 90 danni in più.",
				'pt-br': "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia Fire, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Fire-Energiekarte ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Steam Crush",
				'fr-fr': "Écrasement Vapeur",
				'es-es': "Destrucción Vapor",
				'it-it': "Vapore Distruttivo",
				'pt-br': "Vapor Esmagador",
				'de-de': "Dampfmalmer"
			},
			effect: {
				'en-us': "Discard 2 Energy from your opponent's Active Pokémon.",
				'fr-fr': "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 2 Energías del Pokémon Activo de tu rival.",
				'it-it': "Scarta due Energie dal Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 2 Energias do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [324],

	thirdParty: {
		cardmarket: 437034,
		tcgplayer: 208410
	}
}

export default card
