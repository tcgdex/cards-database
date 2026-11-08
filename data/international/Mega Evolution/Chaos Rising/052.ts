import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Experienced fishers say they try to catch Qwilfish in the brief moment that these Pokemon become defenseless just after launching poisonous spikes.",
	},


	name: {
		'en-us': "Qwilfish",
		'fr-fr': "Qwilfish",
		'es-es': "Qwilfish",
		'es-mx': "Qwilfish",
		'de-de': "Baldorfish",
		'it-it': "Qwilfish",
		'pt-br': "Qwilfish"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [211],
	hp: 90,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Poison Point",
			'fr-fr': "Point Poison",
			'es-es': "Punto Tóxico",
			'es-mx': "Punto Tóxico",
			'de-de': "Giftdorn",
			'it-it': "Velenopunte",
			'pt-br': "Ponto Venenoso"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante ahora está Envenenado.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene avvelenato.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Envenenado."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'es-es': "Carga Tóxica",
			'es-mx': "Carga Tóxica",
			'de-de': "Giftschock",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque"
		},

		cost: ["Darkness"],
		damage: "30+",

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886444,
				tcgplayer: 693538
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886444,
				tcgplayer: 693538
			}
		},
	],
}

export default card
