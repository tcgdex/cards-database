import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magneton",
		de: "Magneton"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bounce Off",
				de: "Abprallen"
			},
			effect: {
				en: "If Magneton and the Defending Pokémon don't have the same number of Energy cards attached to them, the player controlling the Active Pokémon with the fewest number of Energy cards attached to it switches 1 of his or her Benched Pokémon with his or her Active Pokémon.",
				de: "Liegen an Magneton und das verteidigende Pokémon nicht die gleiche Anzahl an Energiekarten an, tauscht der Spieler, an dessen aktives Pokémon die wenigsten Energiekarten angelegt sind, 1 Pokémon auf seiner Bank mit seinem aktiven Pokémon aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Magnetic Wave",
				de: "Magnetwelle"
			},
			effect: {
				en: "This attack does 30 damage plus 10 more damage times the number of your Benched Pokémon minus the number of your opponent's Benched Pokémon. (For example, if your opponent has 1 Benched Pokémon and you have 3, this attack will do 30 damage plus 20 more damage.)",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank minus 10 Schadenspunkte für jedes Pokémon auf der Bank deines Gegners zu. (Hat zum Beispiel dein Gegner 1 Pokémon auf seiner Bank und du 3 auf deiner, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu.)"
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275228
	}
}

export default card
