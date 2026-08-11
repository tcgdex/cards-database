import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Politoed",
		'fr-fr': "Tarpaud",
		'es-es': "Politoed",
		'it-it': "Politoed",
		'pt-br': "Politoed",
		'de-de': "Quaxo"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		186,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Roll Call",
				'fr-fr': "Liste d’Appel",
				'es-es': "Pasar Lista",
				'it-it': "Convocazione",
				'pt-br': "Chamada",
				'de-de': "Appell"
			},
			effect: {
				'en-us': "Search your deck for a Poliwag, a Poliwhirl, and a Poliwrath, and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Ptitard, un Têtarte et un Tartard dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Poliwag, 1 Poliwhirl y 1 Poliwrath, y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Poliwag, un Poliwhirl e un Poliwrath e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Poliwag, por 1 Poliwhirl e por 1 Poliwrath no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Quapsel, 1 Quaputzi und 1 Quappo und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Jump",
				'fr-fr': "Hyper Saut",
				'es-es': "Hipersalto",
				'it-it': "Ipersalto",
				'pt-br': "Hipersalto",
				'de-de': "Hypersprung"
			},
			effect: {
				'en-us': "You may shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				'it-it': "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They gather on moonlit nights to form a large chorus. Their cries sound angry and not at all pleasant, but they are certainly distinctive.",
	},

	thirdParty: {
		cardmarket: 297690,
		tcgplayer: 130925
	}
}

export default card
