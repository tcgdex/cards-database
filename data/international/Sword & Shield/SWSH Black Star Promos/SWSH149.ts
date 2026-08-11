import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [136],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		'en-us': "Flareon V",
		'fr-fr': "Pyroli V",
		'de-de': "Flamara V",
		'es-es': "Flareon V",
		'pt-br': "Flareon V",
		'it-it': "Flareon V"
	},

	rarity: "Promo",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flaming Breath",
			'fr-fr': "Souffle de Flamme",
			'de-de': "Flammender Atem",
			'es-es': "Aliento Flamígero",
			'pt-br': "Hálito Flamejante",
			'it-it': "Soffio Ardente"
		},

		damage: 20,

		effect: {
			'en-us': "Search your deck for a {R} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Energia {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Scorching Column",
			'fr-fr': "Colonne Torride",
			'de-de': "Versengende Säule",
			'es-es': "Columna Abrasadora",
			'pt-br': "Coluna Abrasadora",
			'it-it': "Torre Ustionante"
		},

		damage: 120,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 2,

	thirdParty: {
		cardmarket: 576502
	}
}

export default card
