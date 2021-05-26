import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Palossand",
		fr: "Trépassable"
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Sink",
				fr: "Sables Mouvants"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck. If this Pokémon has a Cursed Shovel attached, discard 2 more cards from the top of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si une Pelle Maudite est attachée à ce Pokémon, défaussez 2 cartes supplémentaires du dessus du deck de votre adversaire."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Absorption",
				fr: "Super Absorption"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 4,
	hp: 140,
	types: ["Psychic"]
}

export default card
