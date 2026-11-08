import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'fr-fr': "Chochodile",
		'en-us': "Fuecoco",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Trou d'Mémoire",
			'en-us': "Spacing Out",
			'es-es': "En las Nubes",
			'it-it': "Vuoto Mentale",
			'pt-br': "Sonhando Acordado",
			'de-de': "Dahindöser"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, soignez 30 dégâts de ce Pokémon.",
			'en-us': "Flip a coin. If heads, heal 30 damage from this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, cura 30 puntos de daño a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, cura questo Pokémon da 30 danni.",
			'pt-br': "Jogue uma moeda. Se sair cara, cure 30 pontos de dano deste Pokémon.",
			'de-de': "Wirf 1 Münze. Heile bei Kopf 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Flamboiement",
			'en-us': "Flare",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715676,
				tcgplayer: 497604,
				cardtrader: 248851
			}
		},
	],

	illustrator: "kantaro",

	description: {
		'en-us': "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
}

export default card
