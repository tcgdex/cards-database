import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		'en-us': "Origin Forme Dialga V",
		'fr-fr': "Dialga Originel V",
		'es-es': "Dialga Origen V",
		'it-it': "Dialga Originale V",
		'pt-br': "Dialga Forma Origem V",
		'de-de': "Ur-Dialga V"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Metal Coating",
			'fr-fr': "Revêtement Métal",
			'es-es': "Recubrimiento Metálico",
			'it-it': "Metalcopertura",
			'pt-br': "Camada Metálica",
			'de-de': "Metallbeschichtung"
		},

		effect: {
			'en-us': "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie Metal de votre pile de défausse à ce Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía Metal de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon fino a due carte Energia Metal dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia Metal da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege bis zu 2 Metal-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Temporal Rupture",
			'fr-fr': "Rupture Temporelle",
			'es-es': "Brecha Temporal",
			'it-it': "Rottura Temporale",
			'pt-br': "Ruptura Temporal",
			'de-de': "Riss in der Zeit"
		},

		damage: 180
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
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658838,
				tcgplayer: 272427
			}
		},
	],
}

export default card
