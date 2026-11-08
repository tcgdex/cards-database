import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		'fr-fr': "Piétacé",
		'en-us': "Cetoddle",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Repos",
			'en-us': "Rest",
			'es-es': "Descanso",
			'it-it': "Riposo",
			'pt-br': "Descansar",
			'de-de': "Erholung"
		},

		effect: {
			'fr-fr': "Ce Pokémon est maintenant Endormi. Soignez 60 dégâts de ce Pokémon.",
			'en-us': "This Pokémon is now Asleep. Heal 60 damage from it.",
			'es-es': "Este Pokémon pasa a estar Dormido. Cúrale 60 puntos de daño.",
			'it-it': "Questo Pokémon viene addormentato. Curalo da 60 danni.",
			'pt-br': "Este Pokémon agora está Adormecido. Cure 60 pontos de dano dele.",
			'de-de': "Dieses Pokémon schläft jetzt. Heile 60 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Damoclès",
			'en-us': "Double-Edge",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715529,
				tcgplayer: 497465,
				cardtrader: 248662
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715529,
				tcgplayer: 497465,
				cardtrader: 248662
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "This species left the ocean and began living on land a very long time ago. It seems to be closely related to Wailmer.",
	},
}

export default card
