import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Flame Bash",
				fr: "Coup de flammes",
			},
			effect: {
				en: "Flip a coin until you get tails. Search your deck for a number of Fire Energy cards up to the number of heads and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cherchez dans votre deck autant de cartes Énergie Fire que vous avez obtenu de faces et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mysterious Flames",
				fr: "Flammes mystérieuses",
			},
			effect: {
				en: "If you have more Energy in play than your opponent, the Defending Pokémon is now Burned and Confused.",
				fr: "Si vous possédez plus d'Énergie en jeu que votre adversaire, le Pokémon Défenseur est maintenant Brûlé et Confus.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],





}

export default card
