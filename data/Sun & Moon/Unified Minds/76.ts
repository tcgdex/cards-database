import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
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
				en: "Ominous Posture",
				fr: "Attitude Inquiétante",
				es: "Postura Aciaga",
				it: "Posa Nefasta",
				pt: "Postura Tenebrosa",
				de: "Ominöse Haltung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode mover 1 contador de dano de 1 dos seus Pokémon para outro Pokémon seu.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Schadensmarke von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
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
				en: "Attract Smack",
				fr: "Poutou Grisant",
				es: "Golpetazo Atrayente",
				it: "Attirattacco",
				pt: "Estalo Atraente",
				de: "Köderklaps"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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

	thirdParty: {
		cardmarket: 388192
	}
}

export default card
