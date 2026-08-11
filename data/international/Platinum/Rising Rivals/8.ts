import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Lucario GL",
		'fr-fr': "Lucario  Niv. 32",
		'de-de': "Lucario GL"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Boundary Aura",
				'fr-fr': "Barrage aura",
				'de-de': "Abgrenz-Aura"
			},
			effect: {
				'en-us': "Apply Weakness for each Pokémon (both yours and your opponent's) as x2 instead.",
				'fr-fr': "Multipliez la Faiblesse par 2 pour chaque Pokémon (les vôtres et ceux de votre adversaire).",
				'de-de': "Wenn Pokémon (deine und die deines Gegners) eine Schwäche haben, dann wird der entsprechende Schaden nicht um den Schwäche-Wert dieses Pokémon erhöht, sondern verdoppelt."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combo Throw",
				'fr-fr': "Combo de lancers",
				'de-de': "Kombowurf"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278582,
				tcgplayer: 86888
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278582,
				tcgplayer: 86888
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 479910
			}
		},
		{
			type: "holo",
			stamp: ["tsubasa-nakamura"],
			thirdParty:{
				cardmarket: 868960,
				tcgplayer: 479910
			}
		},
		{
			type: "holo",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				cardmarket: 868751,
				tcgplayer: 480072
			}
		},
	],

}

export default card
