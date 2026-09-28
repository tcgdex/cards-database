import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor",
	},

	illustrator: "yuu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [103],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Scale Up",
			fr: "Élongation",
		},

		effect: {
			en: "If this Pokémon has 6 or more {G} Energy attached, it gets +250 HP.",
			fr: "Si au moins 6 Énergies {G} sont attachées à ce Pokémon, il a +250 PV.",
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
			fr: "Soignez 50 dégâts de ce Pokémon.",
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895609,
				tcgplayer: 713262
			}
		}
	],
}

export default card
