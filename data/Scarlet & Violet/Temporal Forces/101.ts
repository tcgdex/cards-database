import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [24],
	set: Set,

	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Panic Poison",
			fr: "Poison Panique",
			es: "Pánico Venenoso",
			it: "Velenostress",
			pt: "Veneno do Pânico",
			de: "Panikgift"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Minato"
}

export default card