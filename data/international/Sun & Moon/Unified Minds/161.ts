import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		108,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Heavy Draw",
				'fr-fr': "Pioche Massive",
				'es-es': "Robo Pesado",
				'it-it': "Pesca Grossa",
				'pt-br': "Compra Pesada",
				'de-de': "Gewichtiger Zug"
			},
			effect: {
				'en-us': "Draw a card for each of your Pokémon in play that has a Retreat Cost of exactly 4.",
				'fr-fr': "Piochez une carte pour chacun de vos Pokémon en jeu qui a un Coût de Retraite de 4.",
				'es-es': "Roba 1 carta por cada uno de tus Pokémon en juego que tenga un Coste de Retirada de exactamente 4.",
				'it-it': "Pesca una carta per ogni tuo Pokémon in gioco che abbia un costo di ritirata esattamente pari a quattro.",
				'pt-br': "Compre 1 carta para cada um dos seus Pokémon em jogo que tiver um custo de Recuo de exatamente 4.",
				'de-de': "Ziehe 1 Karte für jedes deiner Pokémon im Spiel, das Rückzugskosten von genau 4 hat."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tongue Slap",
				'fr-fr': "Gros Coup de Langue",
				'es-es': "Bofetón Lengua",
				'it-it': "Linguasberla",
				'pt-br': "Tapa de Língua",
				'de-de': "Zungenschelle"
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

	retreat: 4,

	description: {
		'en-us': "It checks out whatever's around it by licking everything. If you don't clean off a spot where it's licked you, you'll break out in a rash!",
	},

	thirdParty: {
		cardmarket: 388592,
		tcgplayer: 195161
	}
}

export default card
