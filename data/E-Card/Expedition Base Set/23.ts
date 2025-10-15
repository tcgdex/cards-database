import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		de: "Tauboss"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgeotto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Beating Wings",
				fr: "Badelaile",
				de: "Schlagende Flügel"
			},
			effect: {
				en: "Once during your turn (before your attack), If Pidgeot is your Active Pokémon, you may shuffle 1 of your Benched Pokémon and all cards attached to it in your deck. This power can't be used if Pidgeot is affected by a Special Condition.",
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
				en: "Sharp Beak",
				fr: "Bec-aiguisé",
				de: "Scharfschnabel"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "20+",

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

	thirdParty: {
		cardmarket: 274898,
		tcgplayer: 88027
	},

	variants:[
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
