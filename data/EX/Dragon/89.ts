import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Ampharos ex",
		fr: "Pharamp ex",
		de: "Ampharos ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [181],

	hp: 150,

	stage: "Basic",
	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Conductivity",
				fr: "Conductivité",
				de: "Leitfähigkeit"
			},
			effect: {
				en: "As long as Ampharos ex is in play, whenever your opponent attaches an Energy card to his or her Pokémon from hand, put 1 damage counter on that Pokémon. You can't put more than 1 damage counter even if there is more than 1 Ampharos ex in play.",
				fr: "Tant que Pharamp ex est en jeu, dès que votre adversaire attache une carte Énergie de sa main à un Pokémon, placez un marqueur de dégât sur ce Pokémon. Vous ne pouvez pas placer plus d'un marqueur de dégât même s'il y a plus d'un Pharamp ex en jeu.",
				de: "Solange sich Ampharos ex im Spiel befindet, lege jedes Mal, wenn dein Gegner 1 Energiekarte an 1 seiner Pokémon von der Hand anlegt, 1 Schadensmarke auf das entsprechende Pokémon. Du kannst auf diese Weise nicht mehr als 1 Schadensmarke verteilen, auch wenn mehr als 1 Ampharos ex im Spiel ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
				fr: "Gigavolt",
				de: "Gigavolt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei „Zahl“ fügt dieser Angriff 40 Schadenspunkte zu, und das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83550,
				cardmarket: 275966
			},
		},
	],

}

export default card
