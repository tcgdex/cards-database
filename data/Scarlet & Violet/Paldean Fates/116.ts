import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rest",
			fr: "Repos",
			es: "Descanso",
			it: "Riposo",
			pt: "Descansar"
		},

		effect: {
			en: "This Pokémon is now Asleep. Heal 30 damage from it.",
			fr: "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts de ce Pokémon.",
			es: "Este Pokémon pasa a estar Dormido. Cúrale 30 puntos de daño.",
			it: "Questo Pokémon viene addormentato. Curalo da 30 danni.",
			pt: "Este Pokémon agora está Adormecido. Cure 30 pontos de dano dele."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card