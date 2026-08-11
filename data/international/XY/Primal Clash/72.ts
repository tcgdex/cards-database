import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'es-es': "Tentacruel",
		'it-it': "Tentacruel",
		'pt-br': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dancing Tentacles",
				'fr-fr': "Tentacules Dansantes",
				'es-es': "Tentáculos Bailarines",
				'it-it': "Tentacoli Danzanti",
				'pt-br': "Tentáculos Dançantes",
				'de-de': "Tanzende Tentakel"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Stick and Absorb",
				'fr-fr': "Colle et Absorbe",
				'es-es': "Adherirse y Absorber",
				'it-it': "Avvinghia e Assorbi",
				'pt-br': "Grudar e Absorver",
				'de-de': "Festkleben und Einsaugen"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "Cura 30 puntos de daño a este Pokémon. El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Cura questo Pokémon da 30 danni. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Cure 30 de danos deste Pokémon. O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon. Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	retreat: 3,

	description: {
		'en-us': "It has 80 tentacles that move about freely. They can sting, causing poisoning and sharp, stabbing pain.",
	},

	thirdParty: {
		cardmarket: 273603,
		tcgplayer: 95970
	}
}

export default card
