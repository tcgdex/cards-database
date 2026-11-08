import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Drifting Balloon",
				'fr-fr': "Ballon Flottant",
				'es-es': "Globo a la Deriva",
				'it-it': "Pallonderiva",
				'pt-br': "Balão à Deriva",
				'de-de': "Gleitballon"
			},
			effect: {
				'en-us': "This Pokémon’s attacks cost Colorless less for each of your opponent’s Team Plasma Pokémon in play.",
				'fr-fr': "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon de la Team Plasma de votre adversaire en jeu.",
				'es-es': "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon del Equipo Plasma de tu rival en juego.",
				'it-it': "Gli attacchi di questo Pokémon costano Colorless in meno per ogni Pokémon del Team Plasma del tuo avversario in gioco.",
				'pt-br': "O ataque deste Pokémon custa Colorless a menos para cada Pokémon da Equipe Plasma do oponente em jogo.",
				'de-de': "Die Angriffskosten dieses Pokémon verringern sich um Colorless für jedes Team Plasma-Pokémon, das dein Gegner im Spiel hat."
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
				'en-us': "Derail",
				'fr-fr': "Déraillement",
			},
			effect: {
				'en-us': "Discard a Special Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "They carry people and Pokémon, but the wind can catch them, so there can't be a fixed destination.",
	},

	thirdParty: {
		cardmarket: 281056,
		tcgplayer: 84951
	}
}

export default card
