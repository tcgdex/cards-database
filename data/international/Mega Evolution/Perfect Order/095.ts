import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [677],

	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'es-mx': "Espurr",
		'de-de': "Psiau",
		'it-it': "Espurr",
		'pt-br': "Espurr"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nap",
			'fr-fr': "Tit'Sieste",
			'es-es': "Siesta",
			'es-mx': "Siesta",
			'de-de': "Nickerchen",
			'it-it': "Pausa",
			'pt-br': "Soneca"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'es-mx': "Estampida",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684418,
				cardmarket: 877512
			}
		}
	],

}

export default card
