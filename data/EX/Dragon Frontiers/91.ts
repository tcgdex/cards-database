import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Dragonite ex δ",
		fr: "Dracolosse ex δ"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dragonair",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deafen",
				fr: "Rendre sourd"
			},
			effect: {
				en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur (cartes Supporter exceptées) de sa main lors de son prochain tour."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Roar",
				fr: "Rugissement de dragon"
			},
			effect: {
				en: "Put 8 damage counters on the Defending Pokémon. If that Pokémon would be Knocked Out by this attack, you may put any damage counters not necessary to Knocked Out the Defending Pokémon on your opponent's Benched Pokémon in any way you like.",
				fr: "Placez 8 marqueurs de dégât sur le Pokémon Défenseur. Si ce Pokémon est mis K.O par cette attaque, placez les marqueurs de dégât restants sur les Pokémon de Banc de votre adversaire de la façon que vous voulez."
			},

		},
	],






}

export default card
