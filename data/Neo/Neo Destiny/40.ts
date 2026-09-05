import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Wigglytuff",
		fr: "Grodoudou obscur",
		de: "Dunkles Knuddeluff"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		de: "Pummeluff"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Song",
				fr: "Sombre chant",
				de: "Finsteres Lied"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei „Kopf“ schläft das verteidigende Pokémon jetzt. Bei „Zahl“ ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slap Awake",
				fr: "Réveil-gifle",
				de: "Wachrütteln"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep or Confused, this attack does 20 damage plus 20 more damage. Then, the Defending Pokémon is no longer Asleep or Confused.",
				fr: "Si le Pokémon Défenseur est Endormi ou Confus, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Le Pokémon Défenseur n'est ensuite plus Endormi ou Confus.",
				de: "Wenn das verteidigende Pokémon schläft oder verwirrt ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu. Danach schläft das verteidigende Pokémon nicht mehr bzw. ist nicht länger verwirrt."
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "This Pokémon has soft, fine hair. When angered, it increases in size and has been known to charge those it considers a threat.",
		fr: "Ce Pokémon a des poils fins et soyeux. Quand il se met en colère, il grossit et il n'est pas impossible qu'il charge ceux qu'il considère comme une menace.",
		de: "Dieses Pokémon hat weiches, feines Haar. Wenn es geärgert wird, wächst es plötzlich an und stürmt auf diejenigen los, die eine Gefahr bedeuten."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274692,
				tcgplayer: 84674
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274692,
				tcgplayer: 84674
			}
		}
	]
}

export default card
