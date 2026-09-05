import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		it: "Gloom",
		de: "Duflor"
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
		it: "Oddish",
		de: "Myrapla"
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
				it: "Velenpolvere",
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				it: "Il Pokémon Difensore è Avvelenato.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
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
				it: "Puzza",
				de: "Fäulnisgeruch"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				fr: "Le Pokémon Défenseur et Ortide sont maintenant tous deux Confus (après le calcul des dégâts).",
				it: "Sia il Pokémon Difensore sia Gloom sono Confusi (dopo aver inflitto i danni).",
				de: "Sowohl das verteidigende Pokémon als auch Duflor sind jetzt verwirrt (nach der Schadensverteilung)."
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
		it: "Il fluido che cola dalla sua bocca non è bava: è un nettare che usa per attirare le prede.",
		de: "Die von seiner Schnauze herunterlaufende Flüssigket ist nicht Geifer, sondern vielmehr Nektar zum Anlocken der Beute."
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
