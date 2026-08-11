import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Umbreon ex",
		'fr-fr': "Noctali ex",
		'de-de': "Nachtara ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Darker Ring",
				'fr-fr': "Cercle plus sombre",
				'de-de': "Darker Ring"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you play Umbreon ex from your hand to evolve 1 of your Pokémon, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Noctali ex de votre main pour faire évoluer 1 de vos Pokémon, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Once during your turn (before your attack), when you play Umbreon ex from your hand to evolve 1 of your Pokémon, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Black Cry",
				'fr-fr': "Cri noir",
				'de-de': "Black Cry"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
				'de-de': "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Fang",
				'fr-fr': "Croc obscur",
				'de-de': "Darkness Fang"
			},

			damage: 60,

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
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90154,
				cardmarket: 276758
			},
		},
		{
			type: "holo",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				tcgplayer: 477974,
				cardmarket: 869542
			},
		}
	],
}

export default card
