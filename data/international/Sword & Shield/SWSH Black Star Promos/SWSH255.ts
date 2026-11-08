import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		'fr-fr': "Dialga Originel V",
		'de-de': "Ur-Dialga V",
		'es-es': "Dialga Origen V",
		'pt-br': "Dialga Forma Origem V",
		'it-it': "Dialga Originale V",
		'en-us': "Origin Forme Dialga V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Revêtement Métal",
			'de-de': "Metallbeschichtung",
			'es-es': "Recubrimiento Metálico",
			'pt-br': "Camada Metálica",
			'it-it': "Metalcopertura",
			'en-us': "Metal Coating"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {M} de votre pile de défausse à ce Pokémon.",
			'de-de': "Lege bis zu 2 {M}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			'es-es': "Une hasta 2 cartas de Energía {M} de tu pila de descartes a este Pokémon.",
			'pt-br': "Ligue até 2 cartas de Energia {M} da sua pilha de descarte a este Pokémon.",
			'it-it': "Assegna a questo Pokémon fino a due carte Energia {M} dalla tua pila degli scarti.",
			'en-us': "Attach up to 2 {M} Energy cards from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Rupture Temporelle",
			'de-de': "Riss in der Zeit",
			'es-es': "Brecha Temporal",
			'pt-br': "Ruptura Temporal",
			'it-it': "Rottura Temporale",
			'en-us': "Temporal Rupture"
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

	thirdParty: {
		cardmarket: 669483
	}
}

export default card
