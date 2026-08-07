import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor",
		it: "Gloom"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
		it: "Oddish"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik",
				de: "Giftpuder",
				it: "Velenpolvere"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet.",
				it: "Il Pokémon Difensore è Avvelenato."
			}

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Foul Odor",
				fr: "Odeur fétide",
				de: "Fäulnisgeruch",
				it: "Puzza"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				fr: "Le Pokémon Défenseur et Ortide sont maintenant tous deux Confus (après le calcul des dégâts).",
				de: "Sowohl das verteidigende Pokémon als auch Duflor sind jetzt verwirrt (nach der Schadensverteilung).",
				it: "Sia il Pokémon Difensore sia Gloom sono Confusi (dopo aver inflitto i danni)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "The fluid that oozes from its mouth isn't drool; it is a nectar that is used to attract prey.",
		fr: "Le liquide qui s'écoule de sa bouche est comestible. Il sert à appâter sa proie.",
		it: "Il fluido che cola dalla sua bocca non è bava: è un nettare che usa per attirare le prede."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273834,
				tcgplayer: 45140
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273834,
				tcgplayer: 45140
			}
		}
	],
}

export default card
