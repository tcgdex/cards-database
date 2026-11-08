import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		573,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Smooth Coat",
				'fr-fr': "Pelage Lustré",
				'es-es': "Manto Suave",
				'it-it': "Pelliscia",
				'pt-br': "Manto Suave",
				'de-de': "Geschmeidiger Mantel"
			},
			effect: {
				'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez les dégâts.",
				'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza una moneda. Si sale cara, evita ese daño.",
				'it-it': "Se questo Pokémon subisce danni da attacchi, lancia una moneta. Se esce testa, previeni quei danni.",
				'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, o dano será impedido.",
				'de-de': "Wirf 1 Münze, wenn diesem Pokémon durch Angriffe Schaden zugefügt wird. Bei „Kopf“ verhindere diesen Schaden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Echoed Voice",
				'fr-fr': "Écho",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their white fur is coated in a special oil that makes it easy for them to deflect attacks.",
	},

	thirdParty: {
		cardmarket: 280310,
		tcgplayer: 84319
	}
}

export default card
