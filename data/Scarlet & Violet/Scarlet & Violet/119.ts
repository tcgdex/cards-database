import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [843],
	set: Set,

	name: {
		en: "Silicobra",
		fr: "Dunaja",
		es: "Silicobra",
		it: "Silicobra",
		pt: "Silicobra",
		de: "Salanga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Kouki Saitou",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	description: {
		en: "Silicobra's neck pouch, which can inflate and deflate like a balloon, gets more elastic each time Silicobra sheds its skin.",
	},

	thirdParty: {
        cardmarket: 702415,
        tcgplayer: 488008
    }
}

export default card