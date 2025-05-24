import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Piétacé",
		en: "Cetoddle",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Repos",
			en: "Rest",
			es: "Descanso",
			it: "Riposo",
			pt: "Descansar",
			de: "Erholung"
		},

		effect: {
			fr: "Ce Pokémon est maintenant Endormi. Soignez 60 dégâts de ce Pokémon.",
			en: "This Pokémon is now Asleep. Heal 60 damage from it.",
			es: "Este Pokémon pasa a estar Dormido. Cúrale 60 puntos de daño.",
			it: "Questo Pokémon viene addormentato. Curalo da 60 danni.",
			pt: "Este Pokémon agora está Adormecido. Cure 60 pontos de dano dele.",
			de: "Dieses Pokémon schläft jetzt. Heile 60 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Damoclès",
			en: "Double-Edge",
			es: "Doble Filo",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes",
			de: "Risikotackle"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			en: "This Pokémon also does 10 damage to itself.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Saya Tsuruta"
}

export default card