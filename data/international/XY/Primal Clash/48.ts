import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Walrein",
		'fr-fr': "Kaimorse",
		'es-es': "Walrein",
		'it-it': "Walrein",
		'pt-br': "Walrein",
		'de-de': "Walraisa"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'es-es': "Tumbar",
				'it-it': "Sconvolgimento",
				'pt-br': "Arrebatar",
				'de-de': "Umwerfen"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser toute carte Stade en jeu.",
				'es-es': "Puedes descartar cualquier carta de Estadio en juego.",
				'it-it': "Puoi scartare una carta Stadio in gioco.",
				'pt-br': "Você pode descartar qualquer card de Estádio em jogo.",
				'de-de': "Lege eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Splash",
				'fr-fr': "Trempette Glacée",
				'es-es': "Chapoteo Congelado",
				'it-it': "Spruzzo Artico",
				'pt-br': "Borrifada Congelada",
				'de-de': "Frostiger Platscher"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 70 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Fighting, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Fighting, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Fighting, esse ataque causará 70 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Fighting-Pokémon ist, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "70+",

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
		'en-us': "It shatters drift ice with its strong tusks. Its thick layer of blubber repels enemy attacks.",
	},

	thirdParty: {
		cardmarket: 273579,
		tcgplayer: 95946
	}
}

export default card
