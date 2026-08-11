import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Victory Heal",
				'fr-fr': "Guérison Victoire",
				'es-es': "Curación Victoria",
				'it-it': "Curavittoria",
				'pt-br': "Cura da Vitória",
				'de-de': "Triumphheilung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 20 damage from 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare uno dei tuoi Pokémon in panchina da 20 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano de 1 dos seus Pokémon no Banco.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei 1 Pokémon auf deiner Bank heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'es-es': "Combustión",
				'it-it': "Fuoco Continuo",
				'pt-br': "Combustão",
				'de-de': "Glühen"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
	},

	thirdParty: {
		cardmarket: 407799,
		tcgplayer: 201207
	}
}

export default card
