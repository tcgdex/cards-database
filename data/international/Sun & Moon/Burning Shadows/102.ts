import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Screech",
				'fr-fr': "Grincement",
				'es-es': "Chirrido",
				'it-it': "Stridio",
				'pt-br': "Agudo",
				'de-de': "Kreideschrei"
			},
			effect: {
				'en-us': "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, le Pokémon Défenseur subit 60 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, los ataques hacen 60 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, il Pokémon difensore subisce 60 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o Pokémon Defensor receberá 60 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 60 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 40,

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
		'en-us': "It has a violent temperament. It will attack anything that looks it in the eye. Its sharp claws inflict deep wounds.",
	},

	thirdParty: {
		cardmarket: 299503,
		tcgplayer: 138598
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
