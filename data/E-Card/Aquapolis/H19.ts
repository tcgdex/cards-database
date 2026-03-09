import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],

			name: {
				en: "Miracle Tail",
				fr: "Queue miracle",
				de: "Wunderschweif"
			},

			effect: {
				en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c'est face, choisissez un État spécial (Endormi, Brûlé, Confus, Paralysé ou Empoisonné). Le Pokémon Défenseur est maintenant affecté par cet État spécial.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" einen Speziellen Zustand (schlafend, verbrannt, verwirrt, gelähmt oder vergiftet). Das Verteidigende Pokémon ist jetzt von diesem Speziellen Zustand betroffen."
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
				en: "Roasting Heat",
				fr: "Rôtissoire",
				de: "Bratende Hitze"
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Brûlé, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon verbrannt ist, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275042,
		tcgplayer: 87767
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
