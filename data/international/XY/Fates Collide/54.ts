import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Zygarde EX",
		'fr-fr': "Zygarde EX",
		'es-es': "Zygarde EX",
		'it-it': "Zygarde-GX",
		'pt-br': "Zygarde EX",
		'de-de': "Zygarde EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 190,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Land's Pulse",
				'fr-fr': "Vibration Terrestre",
				'es-es': "Pulso Telúrico",
				'it-it': "Pulsazione Tellurica",
				'pt-br': "Pulso da Terra",
				'de-de': "Bodenpuls"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 20 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 20 puntos de daño más.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 20 danni in più.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 20 de danos adicionais.",
				'de-de': "Wenn 1 Stadionkarte im Spiel ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Cell Storm",
				'fr-fr': "Tempête Cellulaire",
				'es-es': "Tormenta Celular",
				'it-it': "Tempesta Cellulare",
				'pt-br': "Célula de Tempestade",
				'de-de': "Zellsturm"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land's Wrath",
				'fr-fr': "Force Chtonienne",
				'es-es': "Fuerza Telúrica",
				'it-it': "Forza Tellurica",
				'pt-br': "Ira da Terra",
				'de-de': "Bodengewalt"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289875,
		tcgplayer: 117519
	}
}

export default card
