import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu at the Museum",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thunderbolt"
		},

		effect: {
			en: "Discard all Energy from this Pokémon."
		},

		damage: 100
	}, {
       	cost: ["Colorless"],

       	name: {
       		en: "The Best Collection!"
       	},

		effect: {
			en: "Search your Pokémon TCG Collection for a Pokémon, reveal it, and put it into your hand."
		}
   	}],

	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
        {
        	type: 'normal',
        	size: 'jumbo',
        	thirdParty: {
        		cardmarket: 865392,
        		tcgplayer: 678659
        	}
        },
	],
}

export default card
