import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eldegoss",
		'fr-fr': "Blancoton",
		'es-es': "Eldegoss",
		'it-it': "Eldegoss",
		'pt-br': "Eldegoss",
		'de-de': "Cottomi"
	},

	illustrator: "Mina Nakai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'de-de': "Cottini",
		'es-es': "Gossifleur",
		'pt-br': "Gossifleur",
		'it-it': "Gossifleur"
	},

	attacks: [{
		name: {
			'en-us': "Blessing of Fluff",
			'fr-fr': "Bénédiction Douillette",
			'es-es': "Bendición Sedosa",
			'it-it': "Preghiera della Morbidezza",
			'pt-br': "Benção da Fofura",
			'de-de': "Flauschsegen"
		},

		effect: {
			'en-us': "Search your deck for up to 3 {G} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie {G}, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía {G} y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia {G} e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia {G} no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 {G}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	stage: "Stage1",
	dexId: [830],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 505865
	}
}

export default card
