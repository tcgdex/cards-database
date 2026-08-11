import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headstrike",
				'fr-fr': "Coup de Tête",
				'es-es': "Testarada",
				'it-it': "Testata",
				'pt-br': "Golpe de Cabeça",
				'de-de': "Kopftreffer"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Liquidation",
				'fr-fr': "Aqua-Brèche",
				'es-es': "Hidroariete",
				'it-it': "Idrobreccia",
				'pt-br': "Aquaríete",
				'de-de': "Aquadurchstoß"
			},
			effect: {
				'en-us': "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, le Pokémon Défenseur subit 60 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, los ataques hacen 60 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, il Pokémon difensore subisce 60 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o Pokémon Defensor receberá 60 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 60 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It usually passes its time in the water. When its belly is full, it stores its subdued prey in the water bubble on its head.",
	},

	thirdParty: {
		cardmarket: 407974,
		tcgplayer: 201240
	}
}

export default card
