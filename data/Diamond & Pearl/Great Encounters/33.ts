import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		de: "Arbok"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Deadly Poison",
				fr: "Poison mortel",
				de: "Tödliches Gift"
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 10 damage plus 40 more damage. If the Defending Pokémon is not Poisoned, that Pokémon is now Poisoned.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires. Si le Pokémon Défenseur n'est pas Empoisonné, il est maintenant Empoisonné.",
				de: "Wenn das Verteidigende Pokémon vergiftet ist, fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu. Wenn das Verteidigende Pokémon nicht vergiftet ist, ist es jetzt vergiftet."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
