import { Card } from '../../../interfaces'
import Set from "../30th Celebration Classic Collection"

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf drei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Beat Up",
				fr: "Baston",
				de: "Prügler"
			},
			effect: {
				en: "Flip a coin for each of your Pokémon in play (including this one). This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce pour chacun de vos Pokémon en jeu (y compris celui-là). Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze für jedes deiner Pokémon im Spiel (einschließlich dieses Pokémon). Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20x",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		en: "Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.",
		fr: "Ses pattes cachent des griffes aiguisées. S'il est attaqué, il sort ses griffes et transperce son ennemi.",
		de: "Seine Pfoten verbergen scharfe Krallen. Wenn es angegriffen wird, zeigt es plötzlich seine Krallen und erschreckt den Feind damit."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907943,
				tcgplayer: 716161
			}
		}
	],
}

export default card
