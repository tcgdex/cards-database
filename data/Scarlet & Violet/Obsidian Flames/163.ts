import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

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

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
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
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Cru-Ailes",
			en: "Wing Attack",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725243,
				tcgplayer: 509669,
				cardtrader: 255848
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725243,
				tcgplayer: 509669,
				cardtrader: 255848
			}
		},
	],

	illustrator: "Kariya",

	
}

export default card
