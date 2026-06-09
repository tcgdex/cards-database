import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Firestarter",
				fr: "Pyroteknik",
				de: "Brandstiftung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Blaziken is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie  de votre pile de défausse à un de vos Pokémon de Banc. Ce pouvoir ne peut être utilisé si Brasegali est affecté par un État Spécial.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du einmal eine -Energiekarte von deinem Ablagestapel nehmen und an 1 Pokémon auf deiner Bank anlegen. Diese Poké-Power kann nicht verwendet werden, falls Lohgock von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
				fr: "Courant de feu",
				de: "Feuerstrom"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Blaziken. This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez une carte Énergie  attachée à Brasegali. Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Entferne eine -Energiekarte von Lohgock und lege sie auf den Ablagestapel. Wenn du das machst, fügt dieser Angriff jedem gegnerischen Pokémon auf der Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277311,
		tcgplayer: 83908
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
