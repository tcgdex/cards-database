import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		'es-mx': "Vileplume",
		de: "Giflor",
		it: "Vileplume",
		pt: "Vileplume"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [45],
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Pollen Bomb",
			fr: "Bombe Pollen",
			es: "Bomba de Polen",
			'es-mx': "Bomba Polen",
			de: "Pollenbombe",
			it: "Bomba di Polline",
			pt: "Bomba de Pólen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido y Envenenado.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado."
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			en: "Lively Flower",
			fr: "Fleur Animée",
			es: "Flor Animada",
			'es-mx': "Flor Vivaracha",
			de: "Rasante Blume",
			it: "Fiore Vispo",
			pt: "Flor Agitada"
		},

		effect: {
			en: "If this Pokémon was healed during this turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si este Pokémon fue curado durante este turno, este ataque hace 120 puntos de daño más.",
			de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver sido curado durante este turno, este ataque causará 120 pontos de dano a mais."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857578,
	}
}

export default card