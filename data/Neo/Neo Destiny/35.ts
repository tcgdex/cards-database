import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Forretress",
		fr: "Foretress obscur",
		de: "Dunkles Forstellka"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
		de: "Tannza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Armor Up",
				fr: "Blindage",
				de: "Aufrüsten"
			},
			effect: {
				en: "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.",
				fr: "Jusqu'à la fin de votre prochain tour, si Foretress obscur doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, Foretress obscur n'est pas mis K.O. et ses points de vie deviennent 10.",
				de: "Falls Dunkles Forstellka bis zum Ende deines nächsten Zuges durch Schaden eines Angriffs kampfunfähig würde, wirf eine Münze. Bei „Kopf“ ist Dunkles Forstellka nicht kampfunfähig, und seine verbleibenden KP sind stattdessen 10."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
				de: "Explosion"
			},
			effect: {
				en: "Dark Forretress does 60 damage to itself.",
				fr: "Foretress obscur s'inflige 60 dégâts.",
				de: "Dunkles Forstellka fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It stays motionless in trees, driving away with flying armored shards from its hard shell any who come close.",
		fr: "Il reste immobile dans les arbres et chasse les intrus en leur lançant des piquants blindés.",
		de: "Es sitzt bewegungslos in Bäumen und treibt all die, die ihm zu nahe kommen, mit fliegenden Scherben seines Panzers weg."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274687,
				tcgplayer: 84598
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274687,
				tcgplayer: 84598
			}
		}
	]
}

export default card
