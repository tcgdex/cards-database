import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Voltage Increase",
				fr: "Voltage maxi",
				de: "Spannungsanstieg"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Lightning Energy attached to 1 of your Pokémon to Raichu. This power can’t be used if Raichu is affected by a Special Condition.",
				fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Lightning attachée à l’un des Pokémon de votre Banc et l’attacher à Raichu. Ce pouvoir ne peut pas être utilisé si Raichu est affecté par un État Spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 -Energiekarte, die an 1 deiner Pokémon angelegt ist, an Raichu anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Raichu von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mega Thunderbolt",
				fr: "Méga tonnerre",
				de: "Mega Donnerblitz"
			},
			effect: {
				en: "Discard all Energy attached to Raichu.",
				fr: "Défaussez toutes les cartes Énergie attachées à Raichu.",
				de: "Lege alle Energien, die an Raichu angelegt sind, auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
