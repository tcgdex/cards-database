import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon",
		'pt-br': "Vaporeon",
		'de-de': "Aquana"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Aqua Effect",
				'fr-fr': "Effet Aqua",
				'es-es': "Efecto Aqua",
				'it-it': "Idroeffetto",
				'pt-br': "Efeito Aqua",
				'de-de': "Aqua-Effekt"
			},
			effect: {
				'en-us': "Each of your Stage 1 Pokémon in play is now a Water Pokémon in addition to its existing types.",
				'fr-fr': "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Water en plus de ses types existants.",
				'es-es': "Cada uno de tus Pokémon de Fase 1 en juego pasa a ser un Pokémon Water además de sus tipos actuales.",
				'it-it': "Ciascuno dei tuoi Pokémon di Fase 1 in gioco diventa di tipo Water in aggiunta ai suoi tipi originari.",
				'pt-br': "Cada um dos seus Pokémon Estágio 1 em jogo é agora um Pokémon Water, além dos seus tipos existentes.",
				'de-de': "Jedes deiner Phase-1-Pokémon im Spiel ist jetzt zusätzlich zu seinen bereits vorhandenen Typen ein Water-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-Éclaboussure",
				'es-es': "Hidroestallido",
				'it-it': "Idrosplash",
				'pt-br': "Hidro Borrifada",
				'de-de': "Hydroplatscher"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has evolved to be suitable for an aquatic life. It can invisibly melt away into water.",
	},

	thirdParty: {
		cardmarket: 284203,
		tcgplayer: 101443
	}
}

export default card
