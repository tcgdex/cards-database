import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'fr-fr': "Scolocendre",
		'en-us': "Centiskorch",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Grillepattes",
		'en-us': "Sizzlipede"
	},

	attacks: [{
		name: {
			'fr-fr': "Flammes Mille-Pattes",
			'en-us': "Hundred Foot Flames",
			'es-es': "Llamas de Cien Pies",
			'it-it': "Fiamme Centopiedi",
			'pt-br': "Chamas de Cem Pés",
			'de-de': "Hundertfußflammen"
		},

		effect: {
			'fr-fr': "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "For each Fire Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			'es-es': "Por cada Energía Fire unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Per ogni Energia Fire assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Para cada Energia Fire ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege für jede an dieses Pokémon angelegte Fire-Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fire"]
	}, {
		name: {
			'fr-fr': "Flammes Calcinantes",
			'en-us': "Searing Flame",
			'es-es': "Llama Abrasadora",
			'it-it': "Fiamme Ustionanti",
			'pt-br': "Chama Cauterizante",
			'de-de': "Sengende Flammen"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Your opponent's Active Pokémon is now Burned.",
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
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539483,
				tcgplayer: 232368
			}
		},
	],
}

export default card
