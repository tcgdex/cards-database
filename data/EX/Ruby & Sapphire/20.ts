import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		de: "Gewaldro"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Trans",
				fr: "Transfert d'énergie",
				de: "Energieverteilung"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
				fr: "Pendant votre tour (avant votre attaque), vous pouvez déplacer autant de fois que vous le voulez une carte Énergie  attachée à un de vos Pokémon sur un autre de vos Pokémon. Ce pouvoir ne peut être utilisé si Jungko est affecté par un État Spécial.",
				de: "Während deines Zuges kannst du (vor deinem Angriff) beliebig oft eine an 1 deiner Pokémon angelegte -Energiekarte nehmen und an 1 anderes anlegen. Diese Poké-Power kann nicht verwendet werden, falls Gewaldro von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Rap",
				fr: "Frap'keu",
				de: "Schweifklopfen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 275659,
		tcgplayer: 88945
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
