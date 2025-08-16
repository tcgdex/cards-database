import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [830],
	set: Set,

	name: {
		fr: "Blancoton",
		en: "Eldegoss",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		fr: "Tournicoton",
		en: "Gossifleur"
	},

	attacks: [{
		name: {
			fr: "Bénédiction Douillette",
			en: "Blessing of Fluff",
			es: "Bendición Sedosa",
			it: "Preghiera della Morbidezza",
			pt: "Benção da Fofura",
			de: "Flauschsegen"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Grass y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia Grass e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Grass-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Feuillage",
			en: "Leafage",
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
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	thirdParty: {
		cardmarket: 539098
	}
}

export default card
