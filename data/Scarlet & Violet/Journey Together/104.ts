import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Klang",
		fr: "Clic de N",
		es: "Klang de N",
		de: "Ns Kliklak",
		it: "Klang di N",
		pt: "Klang do N",
		'es-mx': "Klang de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spinning Gears",
			fr: "Engrenages Tournoyants",
			es: "Engranajes Giratorios",
			de: "Durchdrehendes Getriebe",
			it: "Ingranaggi Rotanti",
			pt: "Engrenagem Giratória",
			'es-mx': "Engranajes Giratorios"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			de: "Konfrontieren",
			it: "Confronto",
			pt: "Confrontar",
			'es-mx': "Confrontar"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
