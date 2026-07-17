import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "When carrying a Charjabug, Vikavolt can receive electricity from it and then rapidly fire powerful electromagnetic beams from its large jaws.",
		de: "Trägt es ein Akkup, wird es von diesem mit Strom versorgt, den es als starke elektromagnetische Strahlen aus seinem großen Kiefer abfeuert."
	},

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		'es-mx': "Vikavolt",
		de: "Donarion"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [738],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Charjabug"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Quick Dive",
			de: "Schnelltaucher"
		},

		cost: ["Lightning"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		name: {
			en: "Giga Railgun",
			de: "Gigaschienenkanone"
		},

		cost: ["Lightning", "Lightning"],

		damage: 260,

		effect: {
			en: "If this Pokémon doesn't have Bolt Lightning Energy attached to it, this attack does nothing",
			de: "Wenn an dieses Pokémon keine Voltaische-{L}-Energie angelegt ist, hat diese Attacke keine Auswirkungen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895814,
				tcgplayer: 704783
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895814,
				tcgplayer: 704783
			}
		},
	],
}

export default card
