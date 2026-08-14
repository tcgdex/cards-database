import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		580,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roost",
				fr: "Atterrissage",
				de: "Ruheort"
			},
			effect: {
				en: "Heal 40 damage from this Pokémon. This Pokémon can't retreat during your next turn.",
				fr: "Soignez 40 dégâts à ce Pokémon. Ce Pokémon ne peut pas battre en retraite pendant votre prochain tour.",
				de: "Heile 40 Schadenspunkte bei diesem Pokémon. Dieses Pokémon kann sich während deines nächsten Zuges nicht zurückziehen."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				de: "Regenplatscher"
			},

			damage: 20,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "When attacked, it uses its feathers to splash water, escaping under cover of the spray.",
		de: "Gerät es in Gefahr, versprüht es Wasser aus seinem Federkleid und nutzt den Sprühregen, um Reißaus zu nehmen."
	},

	thirdParty: {
		cardmarket: 279991,
		tcgplayer: 84991
	}
}

export default card
