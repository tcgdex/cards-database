import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		712,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Break Open",
				'fr-fr': "Fracturer",
				'es-es': "Rajar",
				'it-it': "Frattura",
				'pt-br': "Partir ao Meio",
				'de-de': "Aufbrechen"
			},
			effect: {
				'en-us': "If your opponent has a Stadium card in play, discard it. If you do, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Si tu rival tiene alguna carta de Estadio en juego, descártala. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Se il tuo avversario ha una carta Stadio in gioco, scartala. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Se o seu oponente tiver uma carta de Estádio em jogo, descarte-a. Se fizer isto, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Using air of -150 degrees Fahrenheit, they freeze opponents solid. They live in herds above the snow line on mountains.",
	},

	thirdParty: {
		cardmarket: 355548,
		tcgplayer: 165680
	}
}

export default card
