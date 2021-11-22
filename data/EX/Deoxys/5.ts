import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Baltoy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Trace",
				fr: "Psycho-trace"
			},
			effect: {
				en: "Once during your turn (before your attack), if Claydol is your Active Pokémon, you may shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand. This power can't be used if Claydol is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Kaorine est votre Pokémon Actif, vous pouvez mélanger votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Kaorine est affecté par un État Spécial."
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
				en: "Ancient Mantra",
				fr: "Litanie ancestrale"
			},
			effect: {
				en: "If Claydol has any Psychic Energy attached to it, the Defending Pokémon is now Confused. If Claydol has any Fighting Energy attached to it, this attack does 20 damage plus 20 more damage.",
				fr: "Si Kaorine possède des Énergies , le Pokémon Défenseur est maintenant Confus. Si Kaorine possède des Énergies , cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
