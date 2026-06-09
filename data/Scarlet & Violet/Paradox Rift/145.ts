import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Filch",
			fr: "Maraudage",
			es: "Birlar",
			it: "Furtarello",
			pt: "Furtar",
			de: "Mopsen"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Smack",
			fr: "Claque",
			es: "Palmetazo",
			it: "Schiaffo",
			pt: "Estalo",
			de: "Klatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740684,
				tcgplayer: 523826,
				cardtrader: 265248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740684,
				tcgplayer: 523826,
				cardtrader: 265248
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
