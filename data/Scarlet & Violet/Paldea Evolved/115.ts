import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		fr: "Coatox",
		en: "Toxicroak",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Griffes Articulées",
			en: "Knuckle Claws",
			es: "Garras Nudillo",
			it: "Noccartigli",
			pt: "Garras Articuladas",
			de: "Knöchelkralle"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card