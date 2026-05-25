import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Chesnaught"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [652],
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		en: "Quilladin"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Needle Armor"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon for each Grass Energy attached to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Impound"
		},

		cost: ["Grass", "Grass", "Colorless"],
		damage: 160,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693460
			}
		}
	],
}

export default card