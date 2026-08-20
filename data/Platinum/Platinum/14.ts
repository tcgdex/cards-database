import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Flower Aroma",
				fr: "Arôme floral",
				de: "Blumenduft"
			},
			effect: {
				en: "Remove 2 damage counters from Shaymin. The Defending Pokémon is now Asleep.",
				fr: "Retirez à Shaymin 2 marqueurs de dégât. Le Pokémon Défenseur est maintenant Endormi.",
				de: "Entferne 2 Schadensmarken von Shaymin. Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Damage Aid",
				fr: "Aide aux dégâts",
				de: "Schadensbeistand"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 50 more damage. Then, remove all Special Conditions from the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires. Ensuite, retirez au Pokémon Défenseur tous ses États Spéciaux.",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 30 Schadenspunkte plus 50 weitere Schadenspunkte zu. Danach entferne alle Speziellen Zustände vom Verteidigenden Pokémon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It lives in flower patches and avoids detection by curling up to look like a flowering plant.",
		de: "Es lebt auf Blumenwiesen und rollt sich ein, um wie eine Blume auszusehen und nicht entdeckt zu werden."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89108,
				cardmarket: 278435
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89108
			}
		}
	],

}

export default card
