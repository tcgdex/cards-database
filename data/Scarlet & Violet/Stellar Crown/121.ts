import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Send Back",
			fr: "Renvoyer",
			es: "Retornar",
			it: "Mandaindietro",
			pt: "Mandar Embora",
			de: "Zurückschicken"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Teeziro",

	thirdParty: {
		cardmarket: 785975
	}
}

export default card
