import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		'en-us': "Qwilfish",
		'fr-fr': "Qwilfish",
		'es-es': "Qwilfish",
		'it-it': "Qwilfish",
		'pt-br': "Qwilfish",
		'de-de': "Baldorfish"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bursting Needles",
			'fr-fr': "Piquants Éclatants",
			'es-es': "Púas Explosivas",
			'it-it': "Esplosione di Aculei",
			'pt-br': "Agulhas Explosivas",
			'de-de': "Stachelexplosion"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 6 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 6 contadores de daño en el Pokémon Atacante.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti sei segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque do Pokémon do seu oponente, coloque 6 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 6 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Poison Jab",
			'fr-fr': "Direct Toxik",
			'es-es': "Puya Nociva",
			'it-it': "Velenpuntura",
			'pt-br': "Golpe Envenenado",
			'de-de': "Gifthieb"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
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


	stage: "Basic",

	description: {
		'en-us': "The small spikes covering its body developed from scales. They inject a toxin that causes fainting."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567209,
				tcgplayer: 241775
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567209,
				tcgplayer: 241775
			}
		},
	],
}

export default card
