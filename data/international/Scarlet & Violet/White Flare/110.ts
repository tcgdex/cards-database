import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [581],
	set: Set,

	name: {
		'en-us': "Swanna",
		'fr-fr': "Lakmécygne",
		'de-de': "Swaroness",
		'it-it': "Swanna",
		'pt-br': "Swanna",
		'es-es': "Swanna",
		'es-mx': "Swanna"
	},

	illustrator: "Gemi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'de-de': "Piccolente",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'es-es': "Ducklett",
		'es-mx': "Ducklett"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'de-de': "Flattern",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'es-es': "Aleteo",
			'es-mx': "Aleteo"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'de-de': "Luftschnitt",
			'it-it': "Eterelama",
			'pt-br': "Golpe de Ar",
			'es-es': "Tajo Aéreo",
			'es-mx': "Corte Aéreo"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836114,
			tcgplayer: 642222
		}
	},
],
}

export default card
