import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'es-es': "Scolipede",
		'it-it': "Scolipede",
		'pt-br': "Scolipede",
		'de-de': "Cerapendra"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		545,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
	},

	stage: "Stage2",

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
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venoshock",
				'fr-fr': "Choc Venin",
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It clasps its prey with the claws on its neck until it stops moving. Then it finishes it off with deadly poison.",
	},

	thirdParty: {
		cardmarket: 280661,
		tcgplayer: 88970
	}
}

export default card
