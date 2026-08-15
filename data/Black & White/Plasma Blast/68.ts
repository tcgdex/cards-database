import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Fraxure",
		fr: "Incisache",
		es: "Fraxure",
		it: "Fraxure",
		pt: "Fraxure",
		de: "Sharfax"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
		de: "Milza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
				fr: "Regard Paralysant",
				de: "Lähmender Blick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				de: "Drachenklaue"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.",
		de: "Da seine Hauer nicht mehr nachwachsen, wetzt es sie nach einem Kampf behutsam an den Felsen eines Flussbettes."
	},

	thirdParty: {
		cardmarket: 281089,
		tcgplayer: 85561
	}
}

export default card
