import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		es: "Qwilfish",
		it: "Qwilfish",
		pt: "Qwilfish",
		de: "Baldorfish"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Bursting Needles",
			fr: "Piquants Éclatants",
			es: "Púas Explosivas",
			it: "Esplosione di Aculei",
			pt: "Agulhas Explosivas",
			de: "Stachelexplosion"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent’s Pokémon, put 6 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 6 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti sei segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque do Pokémon do seu oponente, coloque 6 contadores de dano no Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 6 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
			es: "Puya Nociva",
			it: "Velenpuntura",
			pt: "Golpe Envenenado",
			de: "Gifthieb"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The small spikes covering its body developed from scales. They inject a toxin that causes fainting."
	}
}

export default card