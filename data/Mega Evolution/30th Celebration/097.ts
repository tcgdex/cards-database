import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It nests deep inside a cave. Food there is scarce, so Deino will sink its teeth into anything that moves and attempt to eat it."
	},

	name: {
		en: "Deino",
		fr: "Solochi",
		de: "Kapuno",
		es: "Deino",
		it: "Deino",
		'es-mx': "Deino",
		pt: "Deino"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	dexId: [633],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			es: "Roer",
			it: "Rosicchiamento",
			'es-mx': "Mordisquear",
			pt: "Roída"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			'es-mx': "Golpe Cabeza",
			pt: "Cabeçada"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907704,
				tcgplayer: 716490
			}
		}
	],
}

export default card
