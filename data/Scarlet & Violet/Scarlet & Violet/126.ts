import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		en: "Grimer",
		fr: "Tadmorv",
		es: "Grimer",
		it: "Grimer",
		pt: "Grimer",
		de: "Sleima"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

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

		damage: 50
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Kouki Saitou",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: {
		holo: false
	},

	thirdParty: {
		cardmarket: 702421
	}
}

export default card