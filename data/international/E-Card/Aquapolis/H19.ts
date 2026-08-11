import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],

			name: {
				'en-us': "Miracle Tail",
				'fr-fr': "Queue miracle",
				'de-de': "Wunderschweif"
			},

			effect: {
				'en-us': "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un État spécial (Endormi, Brûlé, Confus, Paralysé ou Empoisonné). Le Pokémon Défenseur est maintenant affecté par cet État spécial.",
				'de-de': "Wirf eine Münze. Wähle bei \"Kopf\" einen Speziellen Zustand (schlafend, verbrannt, verwirrt, gelähmt oder vergiftet). Das Verteidigende Pokémon ist jetzt von diesem Speziellen Zustand betroffen."
			},

			damage: 10
		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Roasting Heat",
				'fr-fr': "Rôtissoire",
				'de-de': "Bratende Hitze"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Brûlé, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon verbrannt ist, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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
				tcgplayer: 87767,
				cardmarket: 275097
			}
		},
	]
}

export default card
