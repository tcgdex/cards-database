import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [683],
	set: Set,

	name: {
		en: "Aromatisse",
		fr: "Cocotine",
		es: "Aromatisse",
		pt: "Aromatisse",
		it: "Aromatisse",
		de: "Parfinesse"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Perfume Press",
			fr: "Pression Entêtante",
			es: "Presión Perfume",
			pt: "Apertão Perfumado",
			it: "Profumopressa",
			de: "Duftdruck"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Wintr Wandr"
}

export default card