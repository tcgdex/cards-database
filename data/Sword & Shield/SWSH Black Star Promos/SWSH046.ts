import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eldegoss",
		fr: "Blancoton",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	illustrator: "Mina Nakai",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Gossifleur",
		fr: "Tournicoton",
		de: "Cottini",
		es: "Gossifleur",
		pt: "Gossifleur",
		it: "Gossifleur"
	},

	attacks: [{
		name: {
			en: "Blessing of Fluff",
			fr: "Bénédiction Douillette",
			es: "Bendición Sedosa",
			it: "Preghiera della Morbidezza",
			pt: "Benção da Fofura",
			de: "Flauschsegen"
		},

		effect: {
			en: "Search your deck for up to 3 {G} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie {G}, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía {G} y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia {G} e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia {G} no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 {G}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
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
		en: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
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
