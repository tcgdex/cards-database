import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		'en-us': "Its body is as hot as lava and is always billowing. Flames will occasionally burst from its shell."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'de-de': "Steinwurf",
			'es-es': "Lanzarrocas",
			'pt-br': "Lançamento de Rocha",
			'it-it': "Sassata"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Body Splash",
			'fr-fr': "Jet Corporel",
			'de-de': "Bauchklatscher",
			'es-es': "Salpicadura Corporal",
			'pt-br': "Borrifada Corporal",
			'it-it': "Corposplash"
		},

		damage: 150,

		effect: {
			'en-us': "Flip 3 coins. For each tails, discard an Energy from this Pokémon.",
			'fr-fr': "Lancez 3 pièces. Pour chaque côté pile, défaussez une Énergie de ce Pokémon.",
			'de-de': "Wirf 3 Münzen. Lege pro Zahl 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Lanza 3 monedas. Por cada cruz, descarta 1 Energía de este Pokémon.",
			'pt-br': "Jogue 3 moedas. Para cada coroa, descarte 1 Energia deste Pokémon.",
			'it-it': "Lancia tre volte una moneta. Ogni volta che esce croce, scarta un'Energia da questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582169,
				tcgplayer: 253132
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582169,
				tcgplayer: 253132
			}
		},
	],
}

export default card
