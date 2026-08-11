import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'es-es': "Sudowoodo",
		'it-it': "Sudowoodo",
		'pt-br': "Sudowoodo",
		'de-de': "Mogelbaum"
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Territorial Strike",
				'fr-fr': "Frappe Territoriale",
				'es-es': "Golpe Territorial",
				'it-it': "Attacco Limitrofo",
				'pt-br': "Golpe Territorial",
				'de-de': "Revierschlag"
			},
			effect: {
				'en-us': "If you don’t have a Stadium card in play, this attack does nothing.",
				'fr-fr': "Si vous n’avez pas de carte Stade en jeu, cette attaque ne fait rien.",
				'es-es': "Si no tienes 1 carta de Estadio en juego, este ataque no hace nada.",
				'it-it': "Se non hai una carta Stadio in gioco, questo attacco non ha effetto.",
				'pt-br': "Se você não tiver uma carta de Estádio em jogo, este ataque não fará nada.",
				'de-de': "Wenn du keine Stadionkarte im Spiel hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's so popular with the elderly that there's a magazine devoted to this Pokémon. Fans obsess over the particular length and angle of its arms.",
	},
}

export default card
