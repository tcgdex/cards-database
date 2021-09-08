import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Portrait",
				fr: "Portrait",
			},
			effect: {
				en: "Once during your turn (before your attack), if Smeargle is your Active Pokémon, you may look at your opponent's hand. If you do, choose a Supporter card you find there and use the effect of that card as the effect of this power. This power can't be used if Smeargle is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Queulorior est votre Pokémon Actif, vous pouvez demander à voir la main de votre adversaire. Dans ce cas, choisissez l’une des cartes Supporter qui s’y trouvent et utilisez les effets de cette carte pour ce Poké-Power. Ce pouvoir ne peut pas être utilisé si Queulorior est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Rap",
				fr: "Frap’keu",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
