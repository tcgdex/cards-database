import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
		de: "Shnebedeck"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				de: "Rasierblatt"
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bang Heads",
				fr: "Choc Frontal",
				de: "Prallköpfe"
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Confused.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
				de: "Dieses Pokémon und das Verteidigende Pokémon sind jetzt verwirrt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "They appear when the snow flowers bloom. When the petals fall, they retreat to places unknown again.",
		de: "Sie erscheinen beim Blühen der Schneeblumen und verschwinden wieder, sobald diese verblüht sind."
	},

	thirdParty: {
		cardmarket: 281047,
		tcgplayer: 83442
	}
}

export default card
