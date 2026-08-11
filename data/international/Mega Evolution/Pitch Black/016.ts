import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wailord ex",
		'fr-fr': "Wailord-ex",
		'es-es': "Wailord ex",
		'es-mx': "Wailord ex",
		'de-de': "Wailord-ex",
		'it-it': "Wailord-ex",
		'pt-br': "Wailord ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [321],
	hp: 380,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wailmer"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'es-mx': "Surf",
			'de-de': "Surfer",
			'it-it': "Surf",
			'pt-br': "Surfar"
		},

		cost: ["Water", "Water", "Water"],

		damage: 120
	}, {
		name: {
			'en-us': "Falling Down",
			'fr-fr': "Écroulement",
			'es-es': "Desplome",
			'es-mx': "Caída Súbita",
			'de-de': "Hinfallen",
			'it-it': "Tombolone",
			'pt-br': "Capotar"
		},

		cost: ["Water", "Water", "Water", "Water", "Water"],

		damage: 270,

		effect: {
			'en-us': "This Pokémon is now Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'es-mx': "Este Pokémon ahora está Dormido.",
			'de-de': "Dieses Pokémon schläft jetzt.",
			'it-it': "Questo Pokémon viene addormentato.",
			'pt-br': "Este Pokémon agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895804,
				tcgplayer: 704773
			}
		},
	],
}

export default card
