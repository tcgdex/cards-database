import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
		de: "Palkia"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		fr: "Niveau Sup",
	},

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Restructure",
				fr: "Restructurer",
				de: "Umstrukturieren"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch 1 of your Active Pokémon with 1 of your Benched Pokémon. Then, you switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. This power can't be used if Palkia is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc. Ensuite, vous échangez 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Ce pouvoir ne peut pas être utilisé si Palkia est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Gegner 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank austauschen lassen. Danach tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Diese Poké-Power kann nicht benutzt werden, wenn Palkia von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Reflect",
				fr: "Hydro-reflet",
				de: "Hydroreflexion"
			},
			effect: {
				en: "You may move all Energy cards attached to Palkia to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
				fr: "Vous pouvez déplacer toutes les cartes Énergie attachées à Palkia sur vos Pokémon de Banc de la façon que vous voulez. (Ignorez cet effet si vous n'avez pas de Pokémon de Banc.)",
				de: "Du kannst alle Energiekarten, die an Palkia angelegt sind, entfernen und in beliebiger Verteilung an die Pokémon auf deiner Bank anlegen. (Dieser Effekt hat keine Auswirkungen, wenn du keine Pokémon auf der Bank hast.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277928,
		tcgplayer: 87919
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
