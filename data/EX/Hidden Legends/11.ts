import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 100,

	types: [
		"Psychic",
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Metang"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Metal Juncture",
				fr: "Jointure métallique",
				de: "Metal Juncture"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Metal Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie  attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Metalosse est affecté par un État Spécial.",
				de: "As often you like during your turn (before your attack), you may move a  Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Metagross is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Squared Attack",
				fr: "Attaque carrée",
				de: "Squared Attack"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Flip 4 coins. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

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
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276085,
		tcgplayer: 87335
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "energy",
		},
		{
			type: "normal",
		}
	]
}

export default card
