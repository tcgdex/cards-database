import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	illustrator: "nagimiso",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'de-de': "Thermopod",
		'es-es': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'it-it': "Sizzlipede"
	},

	attacks: [{
		name: {
			'en-us': "Hundred Foot Flames",
			'fr-fr': "Flammes Mille-Pattes",
			'es-es': "Llamas de Cien Pies",
			'it-it': "Fiamme Centopiedi",
			'pt-br': "Chamas de Cem Pés",
			'de-de': "Hundertfußflammen"
		},

		effect: {
			'en-us': "For each {R} Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			'fr-fr': "Pour chaque Énergie {R} attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Por cada Energía {R} unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Per ogni Energia {R} assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Para cada Energia {R} ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege für jede an dieses Pokémon angelegte {R}-Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fire"]
	}, {
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
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies."
	},

	stage: "Stage1",
	dexId: [851],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 505875
	}
}

export default card
