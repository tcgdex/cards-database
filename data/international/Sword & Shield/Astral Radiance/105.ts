import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Magnetic Catch",
			'fr-fr': "Prise Magnétique",
			'es-es': "Captura Magnética",
			'it-it': "Cattura Magnetica",
			'pt-br': "Captura Magnética",
			'de-de': "Magnetfang"
		},

		effect: {
			'en-us': "Shuffle up to 3 Metal Energy cards from your discard pile into your deck.",
			'fr-fr': "Mélangez avec votre deck jusqu'à 3 cartes Énergie Metal de votre pile de défausse.",
			'es-es': "Pon hasta 3 cartas de Energía Metal de tu pila de descartes en tu baraja y barájalas todas.",
			'it-it': "Rimischia fino a tre carte Energia Metal dalla tua pila degli scarti nel tuo mazzo.",
			'pt-br': "Embaralhe até 3 cartas de Energia Metal da sua pilha de descarte no seu baralho.",
			'de-de': "Mische bis zu 3 Metal-Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Rolling Attack",
			'fr-fr': "Attaque Qui Roule",
			'es-es': "Ataque Giro",
			'it-it': "Attacco Rotolante",
			'pt-br': "Golpe Rolador",
			'de-de': "Rollender Angriff"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "A bizarre Pokémon with but a single eye embedded in an iron sphere. I suspect this creature levitates due to the magnetism it emits from its arms, which resemble horseshoe-shaped magnets.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658766,
				tcgplayer: 272306
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658766,
				tcgplayer: 272306
			}
		},
	],
}

export default card
