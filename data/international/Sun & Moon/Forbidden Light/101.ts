import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'de-de': "UHaFnir"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		715,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'es-es': "Supersónico",
				'it-it': "Supersuono",
				'pt-br': "Supersônico",
				'de-de': "Superschall"
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Resonance",
				'fr-fr': "Résonance",
				'es-es': "Resonancia",
				'it-it': "Risonanza",
				'pt-br': "Ressonância",
				'de-de': "Resonanz"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Confused, this attack does 70 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The ultrasonic waves it emits from its ears can reduce a large boulder to pebbles. It swoops out of the dark to attack.",
	},

	thirdParty: {
		cardmarket: 355614,
		tcgplayer: 165763
	}
}

export default card
