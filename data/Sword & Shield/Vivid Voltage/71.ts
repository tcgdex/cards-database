import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spectral Breach",
				fr: "Brèche Spectrale",
				es: "Brecha Espectral",
				it: "Breccia Spettrale",
				pt: "Brecha Espectral",
				de: "Spektralbruch"
			},
			effect: {
				en: "All Special Energy attached to Pokémon (both yours and your opponent’s) provide Colorless Energy and have no other effect.",
				fr: "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l’Énergie Colorless et n’ont aucun autre effet.",
				es: "Todas las Energías Especiales unidas a los Pokémon (tanto tuyos como de tu rival) proporcionan 1 Energía Colorless y no tienen ningún otro efecto.",
				it: "Tutte le Energie speciali assegnate ai Pokémon, sia tuoi che del tuo avversario, forniscono Energia Colorless e non hanno altri effetti.",
				pt: "Todas as Energias Especiais ligadas aos Pokémon (seus e do seu oponente) fornecem Energia Colorless e não têm nenhum outro efeito.",
				de: "Alle Spezial-Energien, die an Pokémon (deine und die deines Gegners) angelegt sind, liefern Colorless-Energie und haben keinen anderen Effekt."
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
				en: "Spooky Shot",
				fr: "Tir Effrayant",
				es: "Disparo Embrujado",
				it: "Colpomistero",
				pt: "Tiro Assustador",
				de: "Spukschuss"
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "At the bidding of transmissions from the spirit world, it steals people and Pokémon away. No one knows whether it has a will of its own."
	}
}

export default card
