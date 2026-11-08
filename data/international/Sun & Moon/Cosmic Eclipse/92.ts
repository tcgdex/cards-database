import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Dragalge",
		'fr-fr': "Kravarech",
		'es-es': "Dragalge",
		'it-it': "Dragalge",
		'pt-br': "Dragalge",
		'de-de': "Tandrak"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		691,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Poison Cultivation",
				'fr-fr': "Culture de Poison",
				'es-es': "Cultivo Venenoso",
				'it-it': "Coltivazione Venefica",
				'pt-br': "Cultivo Venenoso",
				'de-de': "Giftpflege"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Poisoned, put 10 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, placez 10 marqueurs de dégâts au lieu d’un sur ce Pokémon-là entre chaque tour.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, pon 10 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, metti 10 segnalini danno invece di uno su quel Pokémon tra un turno e l’altro.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, coloque 10 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, lege zwischen den Zügen 10 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sharp Fin",
				'fr-fr': "Aileron Aiguisé",
				'es-es': "Cortaleta",
				'it-it': "Pinnaffilata",
				'pt-br': "Barbatana Afiada",
				'de-de': "Schneidige Flosse"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This vicious Pokémon sprays a poisonous liquid on opponents that come near. For whatever reason, it gets along really well with Dhelmise.",
	},

	thirdParty: {
		cardmarket: 408104,
		tcgplayer: 201266
	}
}

export default card
