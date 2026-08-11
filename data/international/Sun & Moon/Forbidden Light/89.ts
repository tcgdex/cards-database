import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		707,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Metal Sound",
				'fr-fr': "Strido-Son",
				'es-es': "Eco Metálico",
				'it-it': "Ferrostrido",
				'pt-br': "Som de Metal",
				'de-de': "Metallsound"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fairy Lock",
				'fr-fr': "Verrou Enchanté",
				'es-es': "Cerrojo Feérico",
				'it-it': "Blocco Fatato",
				'pt-br': "Aprisionamento de Fada",
				'de-de': "Feenschloss"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It inserts its horn into chinks in metal, absorbing metal ions. For some reason, it collects keys.",
	},

	thirdParty: {
		cardmarket: 355603,
		tcgplayer: 165747
	}
}

export default card
