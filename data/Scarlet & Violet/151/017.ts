import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [17],
	set: Set,

	name: {
		fr: "Roucoups",
		en: "Pidgeotto",
		es: "Pidgeotto",
		it: "Pidgeotto",
		pt: "Pidgeotto",
		de: "Tauboga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		fr: "Roucool",
		en: "Pidgey",
		es: "Pidgey",
		it: "Pidgey",
		pt: "Pidgey",
		de: "Taubsi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Battement",
			en: "Flap",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		en: "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733612,
				tcgplayer: 502566,
				cardtrader: 261138
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733612,
				tcgplayer: 502566,
				cardtrader: 261138
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
