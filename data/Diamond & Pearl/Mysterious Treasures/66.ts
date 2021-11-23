import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown M",
		fr: "Zarbi M"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "MAGNET",
				fr: "MAGNÉTISME"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown M is your Active Pokémon, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Unown M is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi M est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Zarbi M est affecté par un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage. If tails, this attack does 30 damage to 1 of your Pokémon, and this attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts. Si c'est pile, cette attaque inflige 30 dégâts à 1 de vos Pokémon et les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	}
}

export default card
