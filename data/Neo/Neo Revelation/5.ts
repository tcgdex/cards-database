import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Cadoizo",
		de: "Botogel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Present",
				fr: "Cadeau",
				de: "Geschenk"
			},
			effect: {
				en: "Flip 3 coins. If exactly 1 is heads, this attack does 40 damage. If exactly 2 are heads, remove 3 damage counters from the Defending Pokémon. If the Defending Pokémon has fewer damage counters than that, remove all of them. If all 3 are heads, this attack does 60 damage. If all 3 are tails, remove all damage counters from the Defending Pokémon.",
				fr: "Lancez 3 pièces. Si vous obtenez 1 face, cette attaque inflige 40 dégâts. Si vous obtenez 2 faces, retirez 3 marqueurs de dégâts sur le Pokémon Défenseur. Si le nombre de marqueurs de dégâts sur le Pokémon Défenseur est inférieur à ce chiffre, retirez-les tous. Si vous obtenez 3 faces, cette attaque inflige 60 dégâts. Si vous obtenez 3 piles, retirez tous les marqueurs de dégâts sur le Pokémon Défenseur.",
				de: "Wirf 3 Münzen. Wenn du genau einmal 'Kopf' geworfen hast, fügt dieser Angriff 40 Schadenspunkte zu. Wenn du genau zweimal 'Kopf' geworfen hast, entferne 3 Schadensmarken vom verteidigenden Pokémon. Falls das verteidigende Pokémon weniger Schadensmarken hat, entferne alle. Wenn du genau dreimal 'Kopf' geworfen hast, fügt dieser Angriff 60 Schadenspunkte zu. Wenn du jedesmal 'Zahl' geworfen hast, entferne alle Schadensmarken vom verteidigenden Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il transporte des victuailles toute la journée. On raconte que des gens perdus ont été sauvés grâce à ses réserves de nourriture."
	},

	thirdParty: {
		cardmarket: 274591,
		tcgplayer: 84745
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
