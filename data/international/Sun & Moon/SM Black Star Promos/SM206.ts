import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'es-es': "Impactrueno",
				'it-it': "Tuonoshock",
				'pt-br': "Trovoada de Choques",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'es-es': "Lanza una moneda. Si sale cara, el Pokémon Defensor pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon difensore viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Defensor será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 40,

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
		'en-us': "Its nature is to store up electricity. Forests where nests of Pikachu live are dangerous, since the trees are so often struck by lightning.",
	},
}

export default card
