import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko"
	},

	illustrator: "Atsuko Nishida",
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
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Trans",
				fr: "Transfert d'énergie"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can’t be used if Sceptile is affected by a Special Condition.",
				fr: "Pendant votre tour (avant votre attaque), vous pouvez déplacer autant de fois que vous le voulez une carte Énergie  attachée à un de vos Pokémon sur un autre de vos Pokémon. Ce pouvoir ne peut être utilisé si Jungko est affecté par un État Spécial."
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
				fr: "Frap'keu"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de face."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277470,
		tcgplayer: 88948
	}
}

export default card
