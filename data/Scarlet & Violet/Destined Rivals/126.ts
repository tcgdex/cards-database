import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima",
		it: "Grimer",
		es: "Grimer",
		pt: "Grimer"
	},

	illustrator: "Kouki Saitou",
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
			de: "Super-Gifthauch",
			it: "Super Velenospiro",
			es: "Aliento Supervenenoso",
			pt: "Super-hálito Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card