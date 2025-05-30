import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon",
		it: "Slowpoke",
		es: "Slowpoke",
		pt: "Slowpoke"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rest",
			fr: "Repos",
			de: "Erholung",
			it: "Riposo",
			es: "Descanso",
			pt: "Descansar"
		},

		effect: {
			en: "This Pokémon is now Asleep. Heal 30 damage from it.",
			fr: "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts de ce Pokémon.",
			de: "Dieses Pokémon schläft jetzt. Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Questo Pokémon viene addormentato. Curalo da 30 danni.",
			es: "Este Pokémon pasa a estar Dormido. Cúrale 30 puntos de daño.",
			pt: "Este Pokémon agora está Adormecido. Cure 30 pontos de dano dele."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			it: "Bottintesta",
			es: "Golpe Cabeza",
			pt: "Cabeçada"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card