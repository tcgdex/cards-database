import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		de: "Gewaldro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wild Growth",
				fr: "Luxuriance",
				de: "Wildes Wachstum"
			},
			effect: {
				en: "Each basic Grass Energy card attached to your Grass Pokémon provides Grass Grass Energy instead. You can't use more than 1 Wild Growth Poké-Body each turn.",
				fr: "Chaque carte Énergie Grass attachée à vos Pokémon Grass fournit maintenant de l'Énergie Grass Grass. Vous ne pouvez pas utiliser plus d'1 Poké-Body Luxuriance par tour.",
				de: "Jede -Basis-Energiekarte, die an deine -Pokémon angelegt ist, liefert -Energie. Du kannst nicht mehr als 1 Wildes Wachstum Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-feuille",
				de: "Laubklinge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277910
	}
}

export default card
