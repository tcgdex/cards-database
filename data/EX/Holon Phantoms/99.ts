import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Crawdaunt ex",
		fr: "Colhomard ex",
		de: "Krebutack ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Splash Back",
				fr: "Éclabousser",
				de: "Rückplatscher"
			},
			effect: {
				en: "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and return that Pokémon and all cards attached to it to his or her hand. This power can't be used if Crawdaunt ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si votre adversaire possède au moins 4 Pokémon de Banc, vous pouvez en choisir 1 et le replacer dans la main de votre adversaire avec toutes les cartes qui lui sont attachées. Ce pouvoir ne peut pas être utilisé si Colhomard ex est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dein Gegner 4 oder mehr Pokémon auf seiner Bank hat, 1 davon aussuchen. Dein Gegner muss dieses Pokémon und alle Karten, die an ihm angelegt sind, zurück auf die Hand nehmen. Diese Poké-Power kann nicht benutzt werden, wenn Krebutack ex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
				de: "Mächtiger Schlag"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Crawdaunt ex.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Colhomard ex.",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jede an Krebutack ex angelegte Energie zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277069,
		tcgplayer: 84465
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
