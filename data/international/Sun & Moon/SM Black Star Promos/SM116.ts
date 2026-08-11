import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Xurkitree",
		'fr-fr': "Câblifère",
		'es-es': "Xurkitree",
		'it-it': "Xurkitree",
		'pt-br': "Xurkitree",
		'de-de': "Voltriant"
	},
	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de Lumière",
				'es-es': "Destello Deslumbrante",
				'it-it': "Accecobomba",
				'pt-br': "Explosão Fascinante",
				'de-de': "Blendende Explosion"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Cablegram",
				'fr-fr': "Câblogramme",
				'es-es': "Cablegrama",
				'it-it': "Cablogramma",
				'pt-br': "Cabograma",
				'de-de': "Telegramm"
			},
			effect: {
				'en-us': "If you have exactly 3 Prize cards remaining, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "S’il vous reste exactement 3 cartes Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Si te quedan exactamente 3 cartas de Premio, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Se hai esattamente tre carte Premio rimanenti, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Se você tiver exatamente 3 cartas de Prêmio restantes, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wenn du genau 3 verbleibende Preiskarten hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It appeared from the Ultra Wormhole. It raided a power plant, so people think it energizes itself with electricity.",
	},
}

export default card
