import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		de: "Muntier"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Strikes Back",
				fr: "Contre-attaque",
				de: "Abwehrschlag"
			},
			effect: {
				en: "If Vigoroth is your Active Pokémon and is damaged by an opponent's attack (even if Vigoroth is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
				fr: "Si Vigoroth est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Vigoroth est mis K.O), placez 1 marqueur de dégât sur le Pokémon Attaquant.",
				de: "Wenn Muntier dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Muntier dadurch kampfunfähig wird), lege 1 Schadensmarke auf das Angreifende Pokémon."
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
				en: "Ambush",
				fr: "Embuscade",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277347,
		tcgplayer: 90369
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

