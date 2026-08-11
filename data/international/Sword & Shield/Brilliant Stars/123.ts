import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [493],
	set: Set,

	name: {
		'en-us': "Arceus VSTAR",
		'fr-fr': "Arceus VSTAR",
		'es-es': "Arceus V-ASTRO",
		'it-it': "Arceus V ASTRO",
		'pt-br': "Arceus V-ASTRO",
		'de-de': "Arceus VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Arceus V",
		'fr-fr': "Arceus-V",
		'es-es': "Arceus V",
		'it-it': "Arceus-V",
		'pt-br': "Arceus V",
		'de-de': "Arceus-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Trinity Nova",
			'fr-fr': "Nova Trinité",
			'es-es': "Lucero Trinidad",
			'it-it': "Nova Triade",
			'pt-br': "Supernova Tríptica",
			'de-de': "Nova der Dreiheit"
		},

		effect: {
			'en-us': "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon-V comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon V de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon-V nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon V como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon-V an. Mische anschließend dein Deck."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608669,
				tcgplayer: 257279
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 671808
			}
		},
	],
}

export default card
