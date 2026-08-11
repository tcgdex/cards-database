import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'it-it': "Jynx",
		'pt-br': "Jynx",
		'de-de': "Rossana"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ominous Posture",
				'fr-fr': "Attitude Inquiétante",
				'es-es': "Postura Aciaga",
				'it-it': "Posa Nefasta",
				'pt-br': "Postura Tenebrosa",
				'de-de': "Ominöse Haltung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode mover 1 contador de dano de 1 dos seus Pokémon para outro Pokémon seu.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Schadensmarke von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Attract Smack",
				'fr-fr': "Poutou Grisant",
				'es-es': "Golpetazo Atrayente",
				'it-it': "Attirattacco",
				'pt-br': "Estalo Atraente",
				'de-de': "Köderklaps"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

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
		'en-us': "It sways its hips to a rhythm all its own. The precise movements of Jynx living in Alola are truly wonderful.",
	},

	thirdParty: {
		cardmarket: 388192,
		tcgplayer: 195004
	}
}

export default card
