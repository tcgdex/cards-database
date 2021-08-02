import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 140,
	types: [
		"Grass",
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Wicked Wind",
				fr: "Vent Infernal",
			},
			effect: {
				en: "Until the end of your opponent’s next turn, each Stadium or Pokémon Tool card in play has no effect. (This includes cards that come into play on that turn.)",
				fr: "Jusqu’à la fin du prochain tour de votre adversaire, aucune des cartes Stade ou Outil Pokémon en jeu n’a d’effet. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
