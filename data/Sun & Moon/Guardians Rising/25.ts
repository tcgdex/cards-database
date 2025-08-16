import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
		es: "Politoed",
		it: "Politoed",
		pt: "Politoed",
		de: "Quaxo"
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
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Roll Call",
				fr: "Liste d’Appel",
				es: "Pasar Lista",
				it: "Convocazione",
				pt: "Chamada",
				de: "Appell"
			},
			effect: {
				en: "Search your deck for a Poliwag, a Poliwhirl, and a Poliwrath, and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Ptitard, un Têtarte et un Tartard dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Poliwag, 1 Poliwhirl y 1 Poliwrath, y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Poliwag, un Poliwhirl e un Poliwrath e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 Poliwag, por 1 Poliwhirl e por 1 Poliwrath no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Quapsel, 1 Quaputzi und 1 Quappo und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Jump",
				fr: "Hyper Saut",
				es: "Hipersalto",
				it: "Ipersalto",
				pt: "Hipersalto",
				de: "Hypersprung"
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
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

	thirdParty: {
		cardmarket: 297690,
		tcgplayer: 130925
	}
}

export default card
