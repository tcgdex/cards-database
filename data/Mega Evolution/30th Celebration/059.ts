import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "As it gulps down stagnant water and generates electricity in its body, a sound like a rhythm played by a bass guitar reverberates all around."
	},

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		de: "Riffex",
		es: "Toxtricity",
		it: "Toxtricity",
		'es-mx': "Toxtricity"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [849],
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			de: "Flotter Sprung",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			'es-mx': "Superrayo"
		},

		damage: 80,
		cost: ["Lightning", "Colorless"]
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
				cardmarket: 907666,
				tcgplayer: 716458
			}
		}
	],
}

export default card