import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Wigglytuff",
		'fr-fr': "Grodoudou obscur",
		'de-de': "Dunkles Knuddeluff"
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
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Song",
				'fr-fr': "Sombre chant",
				'de-de': "Dark Song"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slap Awake",
				'fr-fr': "Réveil-gifle",
				'de-de': "Slap Awake"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep or Confused, this attack does 20 damage plus 20 more damage. Then, the Defending Pokémon is no longer Asleep or Confused.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi ou Confus, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Le Pokémon Défenseur n'est ensuite plus Endormi ou Confus.",
				'de-de': "If the Defending Pokémon is Asleep or Confused, this attack does 20 damage plus 20 more damage. Then, the Defending Pokémon is no longer Asleep or Confused."
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
		'en-us': "This Pokémon has soft, fine hair. When angered, it increases in size and has been known to charge those it considers a threat.",
		'fr-fr': "Ce Pokémon a des poils fins et soyeux. Quand il se met en colère, il grossit et il n'est pas impossible qu'il charge ceux qu'il considère comme une menace."
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
