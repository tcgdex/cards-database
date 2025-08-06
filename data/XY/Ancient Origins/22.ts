import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
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
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aqua Effect",
				fr: "Effet Aqua",
				es: "Efecto Aqua",
				it: "Idroeffetto",
				pt: "Efeito Aqua",
				de: "Aqua-Effekt"
			},
			effect: {
				en: "Each of your Stage 1 Pokémon in play is now a Water Pokémon in addition to its existing types.",
				fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Water en plus de ses types existants.",
				es: "Cada uno de tus Pokémon de Fase 1 en juego pasa a ser un Pokémon Water además de sus tipos actuales.",
				it: "Ciascuno dei tuoi Pokémon di Fase 1 in gioco diventa di tipo Water in aggiunta ai suoi tipi originari.",
				pt: "Cada um dos seus Pokémon Estágio 1 em jogo é agora um Pokémon Water, além dos seus tipos existentes.",
				de: "Jedes deiner Phase-1-Pokémon im Spiel ist jetzt zusätzlich zu seinen bereits vorhandenen Typen ein Water-Pokémon."
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
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
				es: "Hidroestallido",
				it: "Idrosplash",
				pt: "Hidro Borrifada",
				de: "Hydroplatscher"
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

	thirdParty: {
		cardmarket: 284203,
		tcgplayer: 101443
	}
}

export default card
