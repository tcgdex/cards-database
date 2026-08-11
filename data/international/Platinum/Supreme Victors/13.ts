import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
		'de-de': "Bisaflor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 140,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Green Aroma",
				'fr-fr': "Arôme vert",
				'de-de': "Grünes Aroma"
			},
			effect: {
				'en-us': "Remove all Special Conditions from each of your Grass Pokémon. Each of your Grass Pokémon can't be affected by any Special Conditions.",
				'fr-fr': "Retirez à chacun de vos Pokémon Grass tous leurs États Spéciaux. Aucun de vos Pokémon Grass ne peut être affecté par un État Spécial.",
				'de-de': "Entferne alle Speziellen Zustände von jedem deiner -Pokémon. Deine -Pokémon können nicht von Speziellen Zuständen betroffen werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Desperate Pollen",
				'fr-fr': "Pollen désespéré",
				'de-de': "Verzweiflungspollen"
			},
			effect: {
				'en-us': "If Venusaur already has 8 or more damage counters on it, the Defending Pokémon is now Burned, Confused, and Poisoned.",
				'fr-fr': "Si Florizarre possède déjà au moins 8 marqueurs de dégât, le Pokémon Défenseur est maintenant Brûlé, Confus et Empoisonné.",
				'de-de': "Wenn auf Bisaflor bereits mindestens 8 Schadensmarken liegen, ist das Verteidigende Pokémon jetzt verbrannt, verwirrt und vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Special Reaction",
				'fr-fr': "Réaction spéciale",
				'de-de': "Speziellallergie"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by any Special Conditions, this attack does 40 damage plus 40 more damage for each of those Special Conditions.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par des États Spéciaux, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires pour chacun de ces États Spéciaux.",
				'de-de': "Wenn das Verteidigende Pokémon von mindestens 1 Speziellen Zustand betroffen ist, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte für jeden dieser Speziellen Zustände zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278704,
				tcgplayer: 90321,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278704,
				tcgplayer: 90321
			}
		},
	],

}

export default card
