import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [545],
	set: Set,

	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'de-de': "Cerapendra",
		'it-it': "Scolipede",
		'pt-br': "Scolipede",
		'es-es': "Scolipede",
		'es-mx': "Scolipede"
	},

	illustrator: "Oku",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'de-de': "Rollum",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'es-es': "Whirlipede",
		'es-mx': "Whirlipede"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Poison Point",
			'fr-fr': "Point Poison",
			'de-de': "Giftdorn",
			'it-it': "Velenopunte",
			'pt-br': "Ponto Venenoso",
			'es-es': "Punto Tóxico",
			'es-mx': "Punto Tóxico"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene avvelenato.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Envenenado.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante ahora está Envenenado."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'de-de': "Giftschock",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque",
			'es-es': "Carga Tóxica",
			'es-mx': "Carga Tóxica"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 90 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 90 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 90 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836187,
				tcgplayer: 642589
			}
		},
	]
}

export default card
