import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Hold Still",
			'fr-fr': "Ne Bougez Pas",
			'es-es': "Permanecer Inmóvil",
			'it-it': "Immobile",
			'pt-br': "Ficar Parado",
			'de-de': "Stillhalten"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir",
			'es-es': "Aleta Afilada",
			'it-it': "Pinnalama",
			'pt-br': "Barbatana Cortante",
			'de-de': "Rasierflosse"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Shimaris Yukichi",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780900,
				tcgplayer: 560320
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 781855
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780900,
				tcgplayer: 560320
			}
		},
	],
}

export default card
