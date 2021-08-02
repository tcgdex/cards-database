import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Eldegoss",
		fr: "Blancoton",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
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
		en: "Gossifleur",
		fr: "Tournicoton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blessing of Fluff",
				fr: "Bénédiction Douillette",
				es: "Bendición Sedosa",
				it: "Preghiera della Morbidezza",
				pt: "Benção da Fofura",
				de: "Flauschsegen"
			},
			effect: {
				en: "Search your deck for up to 3 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Grass y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Grass e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Grass-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leafage",
				fr: "Feuillage",
				es: "Follaje",
				it: "Fogliame",
				pt: "Folhagem",
				de: "Blattwerk"
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
	}
}

export default card
