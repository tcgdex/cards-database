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
		fr: "Ramoloss",
		de: "Flegmon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Mind Games",
				fr: "Jeux d'Esprit",
				de: "Denksport"
			},
			effect: {
				en: "Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent's deck. This power can't be used if Slowking is Asleep, Confused, or Paralyzed.",
				fr: "À chaque fois que votre adversaire joue une carte Dresseur, vous pouvez lancer une pièce. Si c'est face, cette carte ne fait rien. Placez-la sur le dessus du deck de votre adversaire. Ce pouvoir ne peut être utilisé si Roigada est Endormi, Confus ou Paralysé.",
				de: "Jedesmal, wenn dein Gegner eine Trainerkarte spielt, kannst du eine Münze werfen. Bei „Kopf“ hat diese Karte keine Auswirkungen. Lege sie oben auf das Deck deines Gegners. Diese Fähigkeit kann nicht verwendet werden, falls Laschoking schläft, verwirrt oder gelähmt ist."
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
				de: "Gedankenexplosion"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires, le Pokémon Défenseur est maintenant Confus. Si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu und das verteidigende Pokémon ist jetzt verwirrt. Bei „Zahl“ fügt dieser Angriff 20 Schadenspunkte zu."
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
	retreat: 3,


	description: {
		en: "When its head was bitten, toxins entered Slowpoke's head and unlocked an extraordinary power.",
		fr: "Un jour qu'il fut mordu à la tête, des toxines pénétrèrent dans le cerveau de Ramoloss en libérant un pouvoir extraordinaire.",
		de: "Als sein Kopf gebissen wurde, drangen Gifte in Flegmons Kopf ein und setzten außerordentliche Kräfte frei."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274414,
				tcgplayer: 89311
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274414,
				tcgplayer: 89311
			}
		}
	]
}

export default card
