import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		es: "Umbreon",
		it: "Umbreon",
		pt: "Umbreon",
		de: "Nachtara"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [197],

	hp: 110,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				en: "Blindside",
				de: "Aus heiterem Himmel"
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				en: "Moon Mirage",
				de: "Mondillusion"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 80,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802831,
				tcgplayer: 614378
			}
		}
	]
}

export default card

