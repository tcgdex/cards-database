import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [477],

	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'es-es': "Dusknoir",
		'it-it': "Dusknoir",
		'pt-br': "Dusknoir",
		'de-de': "Zwirrfinst"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Spectral Breach",
				'fr-fr': "Brèche Spectrale",
				'es-es': "Brecha Espectral",
				'it-it': "Breccia Spettrale",
				'pt-br': "Brecha Espectral",
				'de-de': "Spektralbruch"
			},
			effect: {
				'en-us': "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.",
				'fr-fr': "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l'Énergie Colorless et n'ont aucun autre effet.",
				'es-es': "Todas las Energías Especiales unidas a los Pokémon (tanto tuyos como de tu rival) proporcionan 1 Energía Colorless y no tienen ningún otro efecto.",
				'it-it': "Tutte le Energie speciali assegnate ai Pokémon, sia tuoi che del tuo avversario, forniscono Energia Colorless e non hanno altri effetti.",
				'pt-br': "Todas as Energias Especiais ligadas aos Pokémon (seus e do seu oponente) fornecem Energia Colorless e não têm nenhum outro efeito.",
				'de-de': "Alle Spezial-Energien, die an Pokémon (deine und die deines Gegners) angelegt sind, liefern Colorless-Energie und haben keinen anderen Effekt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spooky Shot",
				'fr-fr': "Tir Effrayant",
				'es-es': "Disparo Embrujado",
				'it-it': "Colpomistero",
				'pt-br': "Tiro Assustador",
				'de-de': "Spukschuss"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "At the bidding of transmissions from the spirit world, it steals people and Pokémon away. No one knows whether it has a will of its own."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511775,
				tcgplayer: 226478
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511775,
				tcgplayer: 226478
			}
		},
	],
}

export default card
