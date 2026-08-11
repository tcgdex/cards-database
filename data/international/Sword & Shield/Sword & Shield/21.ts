import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Eldegoss",
		'fr-fr': "Blancoton",
		'es-es': "Eldegoss",
		'it-it': "Eldegoss",
		'pt-br': "Eldegoss",
		'de-de': "Cottomi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Blessing of Fluff",
				'fr-fr': "Bénédiction Douillette",
				'es-es': "Bendición Sedosa",
				'it-it': "Preghiera della Morbidezza",
				'pt-br': "Benção da Fofura",
				'de-de': "Flauschsegen"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía Grass y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia Grass e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Grass-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leafage",
				'fr-fr': "Feuillage",
				'es-es': "Follaje",
				'it-it': "Fogliame",
				'pt-br': "Folhagem",
				'de-de': "Blattwerk"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	dexId: [830],

	thirdParty: {
		cardmarket: 436274,
		tcgplayer: 208300
	}
}

export default card
