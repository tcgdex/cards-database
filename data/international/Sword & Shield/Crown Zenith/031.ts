import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [320],
	set: Set,

	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nap",
			'fr-fr': "Tit'Sieste",
			'es-es': "Siesta",
			'it-it': "Pausa",
			'pt-br': "Soneca",
			'de-de': "Nickerchen"
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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691748,
				tcgplayer: 478130
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691748,
				tcgplayer: 478130
			}
		},
	],
}

export default card
