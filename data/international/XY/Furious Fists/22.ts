import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		614,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Igloo Hold",
				'fr-fr': "Piège Igloo",
				'es-es': "Agarre Iglú",
				'it-it': "Criostretta",
				'pt-br': "Refúgio Iglu",
				'de-de': "Iglugriff"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mountain Drop",
				'fr-fr': "Montagne Écrasante",
				'es-es': "Caída Montaña Abajo",
				'it-it': "Smottamento",
				'pt-br': "Queda da Montanha",
				'de-de': "Gebirgssturz"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 40 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 40 de danos adicionais.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "They love the cold seas of the north. They create pathways across the ocean waters by freezing their own breath.",
	},

	thirdParty: {
		cardmarket: 281686,
		tcgplayer: 92197
	}
}

export default card
