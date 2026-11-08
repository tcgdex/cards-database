import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Espeon ex",
		'fr-fr': "Mentali ex",
		'de-de': "Psiana ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 110,

	types: [
		"Psychic",
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
				'en-us': "Devo Flash",
				'fr-fr': "Devo Flash",
				'de-de': "Devo Flash"
			},
			effect: {
				'en-us': "Once during your turn, when you play Espeon ex from your hand to evolve 1 of your Pokémon, you may choose 1 Evolved Pokémon on your opponent's Bench, remove the highest Stage Evolution card from that Pokémon, and put it back into his or her hand.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Mentali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir 1 Pokémon Évolué sur le Banc de votre adversaire, retirer à ce Pokémon sa carte Évolution au niveau le plus élevé et la replacer dans la main de votre adversaire.",
				'de-de': "Once during your turn, when you play Espeon ex from your hand to evolved 1 of your Pokémon. Choose 1 of your opponent's evolved Pokémon and return the highest stage evolution cards to his or her hand."
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
				'en-us': "Snap Tail",
				'fr-fr': "Claquement de queue",
				'de-de': "Tail Slap"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "This attack does 30 damage to one of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyloop",
				'fr-fr': "Psy-boucle",
				'de-de': "Psy Loop"
			},
			effect: {
				'en-us': "Does 60 damage plus 30 more damage for each Trainer card your opponent has in play.",
				'fr-fr': "Inflige 60 dégâts plus 30 dégâts supplémentaires pour chaque carte Dresseur que votre adversaire a en jeu.",
				'de-de': "This attack does 60 damage plus 30 more damage for each of your opponent's Trainer cards in play."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85331,
				cardmarket: 276748
			},
		},
		{
			type: "holo",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				tcgplayer: 477615,
				cardmarket: 869543
			},
		},
		{
			type: "holo",
			stamp: ["tom-roos"],
			thirdParty: {
				tcgplayer: 479658,
				cardmarket: 869411
			},
		}
	],
}

export default card
