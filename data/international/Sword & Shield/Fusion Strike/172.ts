import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [629],
	set: Set,

	name: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'de-de': "Skallyk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "Vullaby grow quickly. Bones that have gotten too small for older Vullaby to wear often get passed down to younger ones in the nest."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'de-de': "Rasierflügel",
			'es-es': "Ala Cortante",
			'pt-br': "Asa Cortante",
			'it-it': "Ala Tagliente"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'de-de': "Luftschnitt",
			'es-es': "Tajo Aéreo",
			'pt-br': "Golpe de Ar",
			'it-it': "Eterelama"
		},

		damage: 30,

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582800,
				tcgplayer: 253386
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582800,
				tcgplayer: 253386
			}
		},
	],
}

export default card
