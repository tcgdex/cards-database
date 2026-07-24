import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miracle Tail",
				fr: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
				fr: "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Raichu.",
				de: "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei 'Kopf' 1 davon an Raichu an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Roasting Heat",
				fr: "Choc'éclair",
				de: "Schock-Blitz"
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.",
				fr: "Défaussez-vous de toutes les cartes Énergie  attachées à Raichu ou cette attaque ne fait rien.",
				de: "Lege alle an Raichu angelegten -Energiekarten auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkung."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88501,
				cardmarket: 274900
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
