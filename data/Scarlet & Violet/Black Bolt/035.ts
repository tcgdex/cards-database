import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Munna",
		fr: "Munna",
		de: "Somniam",
		it: "Munna",
		pt: "Munna",
		es: "Munna",
		'es-mx': "Munna"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rest",
			fr: "Repos",
			de: "Erholung",
			it: "Riposo",
			pt: "Descansar",
			es: "Descanso",
			'es-mx': "Descanso"
		},

		effect: {
			en: "This Pokémon is now Asleep. Heal 30 damage from it.",
			fr: "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts de ce Pokémon.",
			de: "Dieses Pokémon schläft jetzt. Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Questo Pokémon viene addormentato. Curalo da 30 danni.",
			pt: "Este Pokémon agora está Adormecido. Cure 30 pontos de dano dele.",
			es: "Este Pokémon pasa a estar Dormido. Cúrale 30 puntos de daño.",
			'es-mx': "Este Pokémon ahora está Dormido. Cúrale 30 puntos de daño."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			de: "Grummeln",
			it: "Borbottio",
			pt: "Resmungo",
			es: "Farfullar",
			'es-mx': "Murmurar"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card