import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Delphox"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [655],

	evolveFrom: {
		en: "Braixen"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Flaring Magic"
		},

		effect: {
			en: "Once during your turn, you may discard a Basic Fire Energy card from your hand in order to use this Ability. Draw cards until you have 7 cards in your hand."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Energized Storm"
		},

		effect: {
			en: "This attack does 30 damage for each Energy attached to all Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 694679
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
