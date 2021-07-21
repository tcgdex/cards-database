import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Cadoizo",
		es: "Delibird",
		it: "Delibird",
		pt: "Delibird",
		de: "Botogel"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		225,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Happy Delivery",
				fr: "Livraison en Fanfare",
				es: "Entrega Feliz",
				it: "Allegra Consegna",
				pt: "Entrega Feliz",
				de: "Freudige Lieferung"
			},
			effect: {
				en: "Choose any number of your Benched Pokémon that don’t already have a Pokémon Tool attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Then, shuffle your deck.",
				fr: "Choisissez autant de vos Pokémon de Banc auxquels aucun Outil Pokémon n’est attaché que vous voulez. Pour chacun de ces Pokémon, cherchez une carte Outil Pokémon dans votre deck et attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
				es: "Elige cualquier cantidad de tus Pokémon en Banca que aún no tengan ninguna Herramienta Pokémon unida a ellos. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Herramienta Pokémon y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Scegli un numero qualsiasi di Pokémon che hai in panchina che non abbiano già un Oggetto Pokémon assegnato. Per ognuno di essi, cerca nel tuo mazzo una carta Oggetto Pokémon e assegnagliela. Poi rimischia le carte del tuo mazzo.",
				pt: "Escolha qualquer número dos seus Pokémon no Banco que ainda não tenham uma carta de Ferramenta Pokémon ligada a eles. Para cada um daqueles Pokémon, procure por 1 carta de Ferramenta Pokémon no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Wähle beliebig viele Pokémon auf deiner Bank, an die noch keine Pokémon-Ausrüstung angelegt ist. Durchsuche für jedes jener Pokémon dein Deck nach 1 Pokémon-Ausrüstung und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
				es: "Aleteo",
				it: "Alabattito",
				pt: "Asa",
				de: "Flattern"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
