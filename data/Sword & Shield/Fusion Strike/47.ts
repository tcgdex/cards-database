import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe",
			fr: "Roussi",
			de: "Versengung",
			es: "Quemadura",
			pt: "Chamuscada",
			it: "Scottata"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582180
	}
}

export default card