import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Yveltal",
		en: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	illustrator: "Hasuno",
	rarity: "Amazing",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Annihilation Magnifique",
			en: "Amazing Destruction",
			es: "Destrucción Increíble",
			it: "Distruzione Policroma",
			pt: "Destruição Incrível",
			de: "Atemberaubende Zerstörung"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est mis K.O.",
			en: "Your opponent’s Active Pokémon is Knocked Out.",
			es: "El Pokémon Activo de tu rival queda Fuera de Combate.",
			it: "Il Pokémon attivo del tuo avversario viene messo KO.",
			pt: "O Pokémon Ativo do seu oponente é Nocauteado.",
			de: "Das Aktive Pokémon deines Gegners ist kampfunfähig."
		},

		cost: ["Fire", "Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card