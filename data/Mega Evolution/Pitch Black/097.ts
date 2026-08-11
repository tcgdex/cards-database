import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Wailord ex",
		fr: "Wailord-ex",
		es: "Wailord ex",
		'es-mx': "Wailord ex",
		de: "Wailord-ex",
		it: "Wailord-ex",
		pt: "Wailord ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [321],
	hp: 380,
	types: ["Water"],

	evolveFrom: {
		en: "Wailmer"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			'es-mx': "Surf",
			de: "Surfer",
			it: "Surf",
			pt: "Surfar"
		},

		cost: ["Water", "Water", "Water"],

		damage: 120
	}, {
		name: {
			en: "Falling Down",
			fr: "Écroulement",
			es: "Desplome",
			'es-mx': "Caída Súbita",
			de: "Hinfallen",
			it: "Tombolone",
			pt: "Capotar"
		},

		cost: ["Water", "Water", "Water", "Water", "Water"],

		damage: 270,

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
			es: "Este Pokémon pasa a estar Dormido.",
			'es-mx': "Este Pokémon ahora está Dormido.",
			de: "Dieses Pokémon schläft jetzt.",
			it: "Questo Pokémon viene addormentato.",
			pt: "Este Pokémon agora está Adormecido."
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
				cardmarket: 895882,
				tcgplayer: 704854
			}
		},
	],
}

export default card
