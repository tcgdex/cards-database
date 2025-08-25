import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Mind Games",
				fr: "Jeux d'Esprit",
				de: "Mind Games"
			},
			effect: {
				en: "Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent's deck. This power can't be used if Slowking is Asleep, Confused, or Paralyzed.",
				fr: "À chaque fois que votre adversaire joue une carte Dresseur, vous pouvez lancer une pièce. Si c'est face, cette carte ne fait rien. Placez-la sur le dessus du deck de votre adversaire. Ce pouvoir ne peut être utilisé si Roigada est Endormi, Confus ou Paralysé.",
				de: "Whenever your opponent play a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent´s deck. This power can´t be used if Slowking is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Blast",
				fr: "Explosion cérébrale",
				de: "Mind Blast"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires, le Pokémon Défenseur est maintenant Confus. Si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Un jour qu'il fut mordu à la tête, des toxines pénétrèrent dans le cerveau de Ramoloss en libérant un pouvoir extraordinaire."
	},

	thirdParty: {
		cardmarket: 274414,
		tcgplayer: 89311
	}
}

export default card
