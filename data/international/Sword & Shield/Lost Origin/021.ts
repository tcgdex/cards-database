import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Draw In",
			'fr-fr': "Aspiracartes",
			'es-es': "Arrastre",
			'it-it': "Aspiracarte",
			'pt-br': "Envolver",
			'de-de': "Ansaugen"
		},

		effect: {
			'en-us': "Attach a Fire Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674032,
				tcgplayer: 283892
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674032,
				tcgplayer: 283892
			}
		},
	],
}

export default card
