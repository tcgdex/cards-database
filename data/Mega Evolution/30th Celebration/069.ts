import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [196],
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	description: {
		en: "It uses the fine fur on its body to sense movement in the air and predict the weather...as well as its foes' thoughts."
	},

	attacks: [{
		name: {
			en: "Miraculous Shine"
		},

		cost: ["Psychic", "Colorless"],

		effect: {
			en: "{{DL|Devolution|In the TCG|Devolve}} each of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand."
		}
	}, {
		name: {
			en: "Super Psy Bolt"
		},

		cost: ["Psychic", "Colorless", "Colorless"],

		damage: 90,
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907676,
				tcgplayer: 696678
			}
		}
	],
}

export default card
