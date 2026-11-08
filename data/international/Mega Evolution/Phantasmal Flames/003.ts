import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vileplume",
		'fr-fr': "Rafflesia",
		'es-es': "Vileplume",
		'es-mx': "Vileplume",
		'de-de': "Giflor",
		'it-it': "Vileplume",
		'pt-br': "Vileplume"
	},

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'es-mx': "Gloom",
		'de-de': "Duflor",
		'it-it': "Gloom",
		'pt-br': "Gloom",
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
			'en-us': "Pollen Bomb",
			'fr-fr': "Bombe Pollen",
			'es-es': "Bomba de Polen",
			'es-mx': "Bomba Polen",
			'de-de': "Pollenbombe",
			'it-it': "Bomba di Polline",
			'pt-br': "Bomba de Pólen"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido y Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado."
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Lively Flower",
			'fr-fr': "Fleur Animée",
			'es-es': "Flor Animada",
			'es-mx': "Flor Vivaracha",
			'de-de': "Rasante Blume",
			'it-it': "Fiore Vispo",
			'pt-br': "Flor Agitada"
		},

		effect: {
			'en-us': "If this Pokémon was healed during this turn, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si este Pokémon fue curado durante este turno, este ataque hace 120 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon tiver sido curado durante este turno, este ataque causará 120 pontos de dano a mais."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "The bud bursts into bloom with a bang. It then starts scattering allergenic, poisonous pollen.",
	},

	illustrator: "Shibuzoh.",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857578,
				tcgplayer: 662238,
				cardtrader: 356787
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857578,
				tcgplayer: 662238,
				cardtrader: 356787
			}
		},
	],
}

export default card
