import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Amoonguss",
		'fr-fr': "Gaulet",
		'es-es': "Amoonguss",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'de-de': "Hutsassa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		591,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Crazy Spore",
				'fr-fr': "Spore Folle",
				'es-es': "Espora Loca",
				'it-it': "Sporafolle",
				'pt-br': "Esporo Louco",
				'de-de': "Verrückte Pilzspore"
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
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Strange Reaction",
				'fr-fr': "Étrange Réaction",
				'es-es': "Reacción Rara",
				'it-it': "Strana Reazione",
				'pt-br': "Reação Estranha",
				'de-de': "Seltsame Reaktion"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Confused, it is now Paralyzed.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Confus, il est maintenant Paralysé.",
				'es-es': "Si el Pokémon Activo de tu rival está Confundido, este pasa a estar Paralizado.",
				'it-it': "Se il Pokémon attivo del tuo avversario è confuso, viene paralizzato.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Confuso, ele será Paralisado.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners verwirrt ist, ist es jetzt paralysiert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.",
	},

	thirdParty: {
		cardmarket: 291520,
		tcgplayer: 121002
	}
}

export default card
