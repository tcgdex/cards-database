import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Avalugg",
		'fr-fr': "Séracrawl",
		'es-es': "Avalugg",
		'it-it': "Avalugg",
		'pt-br': "Avalugg",
		'de-de': "Arktilas"
	},

	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		713,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Ground",
				'fr-fr': "Terrain Gelé",
				'es-es': "Suelo Congelado",
				'it-it': "Terra Congelata",
				'pt-br': "Solo Congelado",
				'de-de': "Gefrorener Boden"
			},
			effect: {
				'en-us': "Your opponent can’t play any Stadium cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Stade de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Estadio de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare le carte Stadio che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Estádio da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Stadionkarten aus seiner Hand spielen."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Skull Bash",
				'fr-fr': "Coud’Krâne",
				'es-es': "Cabezazo",
				'it-it': "Capocciata",
				'pt-br': "Quebra-crânio",
				'de-de': "Schädelwumme"
			},

			damage: 100,

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
		'en-us': "The way several Bergmite huddle on its back makes it look like an aircraft carrier made of ice.",
	},

	thirdParty: {
		cardmarket: 355549,
		tcgplayer: 165681
	}
}

export default card
