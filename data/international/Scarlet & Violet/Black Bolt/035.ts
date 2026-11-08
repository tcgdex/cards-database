import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [517],
	set: Set,

	name: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'de-de': "Somniam",
		'it-it': "Munna",
		'pt-br': "Munna",
		'es-es': "Munna",
		'es-mx': "Munna"
	},

	illustrator: "Eri Kamei",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rest",
			'fr-fr': "Repos",
			'de-de': "Erholung",
			'it-it': "Riposo",
			'pt-br': "Descansar",
			'es-es': "Descanso",
			'es-mx': "Descanso"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep. Heal 30 damage from it.",
			'fr-fr': "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Dieses Pokémon schläft jetzt. Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Questo Pokémon viene addormentato. Curalo da 30 danni.",
			'pt-br': "Este Pokémon agora está Adormecido. Cure 30 pontos de dano dele.",
			'es-es': "Este Pokémon pasa a estar Dormido. Cúrale 30 puntos de daño.",
			'es-mx': "Este Pokémon ahora está Dormido. Cúrale 30 puntos de daño."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'de-de': "Grummeln",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'es-es': "Farfullar",
			'es-mx': "Murmurar"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835978,
				tcgplayer: 642487
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835978,
				tcgplayer: 642487
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836343,
				tcgplayer: 642731
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836342,
				tcgplayer: 642658
			}
		}
	]
}

export default card
