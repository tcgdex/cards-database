import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
		de: "Sengo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Resistance",
				fr: "Résistance au poison",
				de: "Giftresistenz"
			},
			effect: {
				en: "Zangoose can't be Poisoned.",
				fr: "Mangriff ne peut pas être Empoisonné.",
				de: "Sengo kann nicht vergiftet werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Target Slash",
				fr: "Tranche-cible",
				de: "Gezielter Schlitzer"
			},
			effect: {
				en: "If the Defending Pokémon is Seviper, this attack does 10 damage plus 30 more damage.",
				fr: "Si Seviper est le Pokémon Défenseur, cette attaque inflige 40 dégâts.",
				de: "Wenn Vipitis das Verteidigende Pokémon ist, fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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
				en: "Super Slash",
				fr: "Super entaille",
				de: "Super Schlitzer"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 60 dégâts.",
				de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275791,
				tcgplayer: 90702
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275791,
				tcgplayer: 90702
			}
		},
	],

}

export default card
