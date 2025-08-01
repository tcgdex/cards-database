import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Gulpin",
		fr: "Gloupti",
		es: "Gulpin",
		it: "Gulpin",
		pt: "Gulpin",
		de: "Schluppuck"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Drool",
			fr: "Gluant",
			es: "Babeo",
			it: "Sbavare",
			pt: "Babar",
			de: "Sabbern"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Super Poison Breath",
			fr: "Super Haleine Empoisonnée",
			es: "Aliento Supervenenoso",
			it: "Super Velenospiro",
			pt: "Super-hálito Venenoso",
			de: "Super-Gifthauch"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Jerky",

	thirdParty: {
		cardmarket: 785945
	}
}

export default card
