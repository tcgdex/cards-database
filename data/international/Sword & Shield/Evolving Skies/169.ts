import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flareon V",
		'fr-fr': "Pyroli V",
		'es-es': "Flareon V",
		'it-it': "Flareon V",
		'pt-br': "Flareon V",
		'de-de': "Flamara V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Flaming Breath",
			'fr-fr': "Souffle de Flamme",
			'es-es': "Aliento Flamígero",
			'it-it': "Soffio Ardente",
			'pt-br': "Flaming Breath",
			'de-de': "Flammender Atem"
		},

		effect: {
			'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Scorching Column",
			'fr-fr': "Colonne Torride",
			'es-es': "Columna Abrasadora",
			'it-it': "Torre Ustionante",
			'pt-br': "Scorching Column",
			'de-de': "Versengende Säule"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Your opponent's Active Pokémon is now Burned.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	dexId: [136],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574227,
				tcgplayer: 246721
			}
		},
	],
}

export default card
