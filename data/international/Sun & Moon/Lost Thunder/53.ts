import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
		'es-es': "Vulpix de Alola",
		'it-it': "Vulpix di Alola",
		'pt-br': "Vulpix de Alola",
		'de-de': "Alola Vulpix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Secret Alleyway",
				'fr-fr': "Allée Secrète",
				'es-es': "Callejón Secreto",
				'it-it': "Passaggio Segreto",
				'pt-br': "Beco Secreto",
				'de-de': "Geheime Gasse"
			},
			effect: {
				'en-us': "If you have any Fairy Pokémon in play, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si vous avez au moins un Pokémon Fairy en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				'es-es': "Si tienes algún Pokémon Fairy en juego, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se hai dei Pokémon Fairy in gioco, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Se você tiver algum Pokémon Fairy em jogo, este Pokémon não terá custo de Recuo.",
				'de-de': "Wenn du mindestens 1 Fairy-Pokémon im Spiel hast, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
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

	retreat: 1,

	description: {
		'en-us': "In hot weather, this Pokémon makes ice shards with its six tails and sprays them around to cool itself off.",
	},

	thirdParty: {
		cardmarket: 365692,
		tcgplayer: 178860
	}
}

export default card
