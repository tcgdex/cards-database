import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Walrein ex",
		fr: "Kaimorse ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Chilling Breath",
				fr: "Haleine glaçante"
			},
			effect: {
				en: "Once during your turn, when you play Walrein ex from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Kaimorse ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas jouer de carte Dresseur de sa main lors de son prochain tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 70 damage plus 20 more damage. Discard that Stadium card.",
				fr: "Si une carte Stade est en jeu, cette attaque inflige 70 dégâts plus 20 dégâts supplémentaires. Défaussez cette carte Stade."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
