import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Parabolic Counter",
				'fr-fr': "Riposte Parabolique",
				'es-es': "Contraataque Parabólico",
				'it-it': "Contrattacco Parabolico",
				'pt-br': "Contra-ataque Parabólico",
				'de-de': "Parabolkonter"
			},
			effect: {
				'en-us': "If your opponent has any Lightning Pokémon in play, this attack does 90 more damage.",
				'fr-fr': "Si votre adversaire a au moins un Pokémon Lightning en jeu, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si tu rival tiene algún Pokémon Lightning en juego, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il tuo avversario ha dei Pokémon Lightning in gioco, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o seu oponente tiver algum Pokémon Lightning em jogo, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner mindestens 1 Lightning-Pokémon im Spiel hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Zap Kick",
				'fr-fr': "Coup de Pied Ravageur",
				'es-es': "Electropatada",
				'it-it': "Dinamocalcio",
				'pt-br': "Chute Zap",
				'de-de': "Stromtritt"
			},

			damage: 80,

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
		'en-us': "They flare their frills and generate energy. A single Heliolisk can generate sufficient electricity to power a skyscraper.",
	},

	thirdParty: {
		cardmarket: 408524,
		tcgplayer: 201302
	}
}

export default card
