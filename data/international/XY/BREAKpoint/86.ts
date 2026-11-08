import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Dragalge",
		'fr-fr': "Kravarech",
		'es-es': "Dragalge",
		'it-it': "Dragalge",
		'pt-br': "Dragalge",
		'de-de': "Tandrak"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		691,
	],

	hp: 110,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'it-it': "Skrelp",
		'pt-br': "Skrelp",
		'de-de': "Algitt"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Severe Poison",
				'fr-fr': "Poison Violent",
				'es-es': "Veneno Grave",
				'it-it': "Maloveleno",
				'pt-br': "Veneno Forte",
				'de-de': "Pures Gift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 4 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l'altro, metti quattro segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 4 contadores de danos em vez de 1 nesse Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
				'es-es': "Pulso Dragón",
				'it-it': "Dragopulsar",
				'pt-br': "Pulso do Dragão",
				'de-de': "Drachenpuls"
			},
			effect: {
				'en-us': "Discard the top card of your deck.",
				'fr-fr': "Défaussez la carte du dessus de votre deck.",
				'es-es': "Descarta la primera carta de tu baraja.",
				'it-it': "Scarta la prima carta del tuo mazzo.",
				'pt-br': "Descarte o card de cima do seu baralho.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Tales are told of ships that wander into seas where Dragalge live, never to return.",
	},

	thirdParty: {
		cardmarket: 288261,
		tcgplayer: 111621
	}
}

export default card
