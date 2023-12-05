import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Quick Turn",
				fr: "Vif retournement",
				de: "Schnelldrehung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale",
				de: "Überkreuzzerschneider"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est une Évolution, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokempn ein entwickeltes Pokémon ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
