import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Super Poison Breath",
			fr: "Super Haleine Empoisonnée",
			es: "Aliento Supervenenoso",
			it: "Super Velenospiro",
			pt: "Super-hálito Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card