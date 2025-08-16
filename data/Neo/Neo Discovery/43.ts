import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		de: "Amoroso"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Omanyte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Squeeze",
				fr: "Compression",
				de: "Quetschen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est Paralysé. Si c'est pile, l'attaque ne fait que 10 dégâts.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu und das verteidigende Pokémon ist jetzt gelähmt. Bei \"Zahl\" fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Spike Barrage",
				fr: "Barrage de pics",
				de: "Stachel-Stakkato"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Omastar. This attack does 20 damage plus 20 more for each heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergies  attachées à Amonistar. Cette attaque fait 20 dégâts plus 20 dégâts par face.",
				de: "Wirf so viele Münzen, wie -Energie an Amoroso angelegt ist. Dieser Anrgiff fügt 20 Schadenspunkte pro geworfenem \"Kopf\" zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Apparemment, il a brisé la coquille de Kokiyas avec ses crocs acérés et il a mangé ce qui était à l'intérieur."
	},

	thirdParty: {
		cardmarket: 274554,
		tcgplayer: 87866
	}
}

export default card
