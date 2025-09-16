import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Mimic",
				fr: "Copie",
				de: "Mimikry"
			},
			effect: {
				en: "As long as Sudowoodo is your Active Pokémon, it copies all of the Defending Pokémon's attacks, including their costs. This power can't be used if Sudowoodo is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Simularbre reste votre Pokémon Actif, il copie toutes les attaques du Pokémon Défenseur, y compris leur coût en Énergie. Ce pouvoir ne fonctionne pas si Simularbre est Endormi, Confus ou Paralysé.",
				de: "Solange Mogelbaum dein aktives Pokémon ist, kopiert es alle Angriffe des verteidigenden Pokémon, einschließlich ihrer Kosten. Diese Fähigkeit kann nicht verwendet werden, falls Mogelbaum schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque fait 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il se déguise en arbre pour éviter les attaques. Il déteste l'eau, aussi il disparaît dès qu'il se met à pleuvoir."
	},

	thirdParty: {
		cardmarket: 274612,
		tcgplayer: 89590
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

