import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown T",
		fr: "Zarbi T"
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
				en: "THROW",
				fr: "TIRER"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown T is your Active Pokémon, you may discard a card from your hand. Then, flip a coin. If heads, put 2 damage counters on 1 of your opponent's Benched Pokémon. This power can't be used if Unown T is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi T est votre Pokémon Actif, vous pouvez défausser une carte de votre main. Ensuite, lancez une pièce. Si c'est face, placez 2 marqueurs de dégât sur 1 des Pokémon de Banc de votre adversaire. Ce pouvoir ne peut pas être utilisé si Zarbi T est affecté par un État Spécial."
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
				en: "Look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck. Then, show your opponent your hand and he or she chooses 1 card. Shuffle that card into your deck.",
				fr: "Regardez la main de votre adversaire et choisissez 1 carte. Demandez à votre adversaire de mélanger cette carte à son deck. Ensuite, montrez votre main à votre adversaire et demandez-lui de choisir une carte. Mélangez cette carte à votre deck."
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
