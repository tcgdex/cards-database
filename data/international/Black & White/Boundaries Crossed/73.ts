import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'es-es': "Whirlipede",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'de-de': "Rollum"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		544,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Point",
				'fr-fr': "Point Poison",
				'es-es': "Punto Tóxico",
				'it-it': "Velenopunto",
				'pt-br': "Ponto Venenoso",
				'de-de': "Giftdorn"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene avvelenato.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), o Pokémon Atacante será Envenenado.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Storing energy for evolution, it sits. But, when predators approach, it moves to stab them with poison spikes.",
	},

	thirdParty: {
		cardmarket: 280660,
		tcgplayer: 90572
	}
}

export default card
