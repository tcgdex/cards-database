import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [120],
	set: Set,

	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		'en-us': "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Soak in Water",
			'fr-fr': "Barbotage",
			'de-de': "Einweichen",
			'es-es': "En Remojo",
			'pt-br': "Deixar de Molho",
			'it-it': "Bagnato Fradicio"
		},

		effect: {
			'en-us': "Attach a {W} Energy card from your hand to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {W} de votre main à ce Pokémon.",
			'de-de': "Lege 1 {W}-Energiekarte aus deiner Hand an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía {W} de tu mano a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia {W} da sua mão a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia {W} dalla tua mano."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'de-de': "Rundumangriff",
			'es-es': "Ataque Giratorio",
			'pt-br': "Ataque Giratório",
			'it-it': "Attacco Rotante"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582186,
				tcgplayer: 253183
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582186,
				tcgplayer: 253183
			}
		},
	],
}

export default card
