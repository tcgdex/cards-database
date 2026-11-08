import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [760],
	set: Set,

	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "The moves it uses to take down its prey would make a martial artist jealous. It tucks subdued prey under its arms to carry them to its nest."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Split Spiral Punch",
			'fr-fr': "Coup d'Poing en Demi Spirale",
			'de-de': "Spiralhieb",
			'es-es': "Puño en Espiral Cortante",
			'pt-br': "Soco Espiral Dividido",
			'it-it': "Spiralpugno Squarciante"
		},

		damage: 40,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'de-de': "Stärke",
			'es-es': "Fuerza",
			'pt-br': "Força",
			'it-it': "Forza"
		},

		damage: 130
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582779,
				tcgplayer: 253365
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582779,
				tcgplayer: 253365
			}
		},
	],
}

export default card
