import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Roucarnage",
		de: "Tauboss"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heavyweight",
				fr: "Badelaile",
				de: "Schlagende Flügel"
			},
			effect: {
				en: "As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Roucarnage est votre Pokémon Actif, vous pouvez mélanger un des Pokémon de votre Banc et toutes les cartes qui lui sont attachées à votre deck. Ce pouvoir ne peut être utilisé si Roucarnage est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Tauboss dein aktives Pokémon ist, 1 der Pokémon auf deiner Bank und alle daran angelegten Karten in dein Deck mischen. Diese Fähigkeit kann nicht verwendet werden, falls Tauboss von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Sludge",
				fr: "Bec-aiguisé",
				de: "Scharfschnabel"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Grass Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88027,
				cardmarket: 274898
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
