import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Hundred Foot Flames",
				'fr-fr': "Flammes Mille-Pattes",
				'es-es': "Llamas de Cien Pies",
				'it-it': "Fiamme Centopiedi",
				'pt-br': "Chamas de Cem Pés",
				'de-de': "Hundertfußflammen"
			},
			effect: {
				'en-us': "For each Fire Energy attached to this Pokémon, discard the top card of your opponent's deck.",
				'fr-fr': "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Por cada Energía Fire unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
				'it-it': "Per ogni Energia Fire assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Para cada Energia Fire ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
				'de-de': "Lege für jede an dieses Pokémon angelegte Fire-Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies."
	},

	dexId: [851],

	thirdParty: {
		cardmarket: 436349,
		tcgplayer: 208317
	}
}

export default card
