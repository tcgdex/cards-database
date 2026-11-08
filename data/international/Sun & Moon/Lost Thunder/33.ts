import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Floral Heal",
				'fr-fr': "Soin Fleuris",
				'es-es': "Curación Floral",
				'it-it': "Cura Botanica",
				'pt-br': "Cura Floral",
				'de-de': "Blumenheilung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 20 damage from your Active Grass Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à votre Pokémon Grass Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a tu Pokémon Grass Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare il tuo Pokémon Grass attivo da 20 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano do seu Pokémon Grass Ativo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei deinem Aktiven Grass-Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
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

	retreat: 1,

	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
	},

	thirdParty: {
		cardmarket: 365673,
		tcgplayer: 178834
	}
}

export default card
