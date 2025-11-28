import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		'es-mx': "Gligar",
		de: "Skorgla",
		it: "Gligar",
		pt: "Gligar"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [207],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [207],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
			es: "Puya Nociva",
			'es-mx': "Golpe Venenoso",
			de: "Gifthieb",
			it: "Velenpuntura",
			pt: "Golpe Envenenado"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857624
	}
}

export default card