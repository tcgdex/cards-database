import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		fr: "Terracool",
		en: "Toedscool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool",
		de: "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Coud'Pattes",
			en: "Smash Kick",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coud'Boue",
			en: "Mud-Slap",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725198,
				tcgplayer: 509866,
				cardtrader: 255803
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725198,
				tcgplayer: 509866,
				cardtrader: 255803
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
