import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [438],
	set: Set,

	name: {
		fr: "Manzaï",
		en: "Bonsly",
		es: "Bonsly",
		it: "Bonsly",
		pt: "Bonsly",
		de: "Mobai"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			fr: "Pleurnicheries",
			en: "Blubbering",
			es: "Lagrimones",
			it: "Piagnisteo",
			pt: "Abrir o Berreiro",
			de: "Plärren"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mizue",

	thirdParty: {
		cardmarket: 725190
	}
}

export default card