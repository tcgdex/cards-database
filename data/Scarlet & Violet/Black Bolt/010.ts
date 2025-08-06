import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Foongus",
		fr: "Trompignon",
		de: "Tarnpignon",
		it: "Foongus",
		pt: "Foongus",
		es: "Foongus",
		'es-mx': "Foongus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Toxic Spore",
			fr: "Spore Toxik",
			de: "Toxische Sporen",
			it: "Spora Tossica",
			pt: "Esporo Tóxico",
			es: "Espora Tóxica",
			'es-mx': "Esporas Tóxicas"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835921
	}
}

export default card