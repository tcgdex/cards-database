import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		en: "Squirtle",
		fr: "Carapuce",
		es: "Squirtle",
		it: "Squirtle",
		pt: "Squirtle",
		de: "Schiggy"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665247,
				tcgplayer: 274445
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665247,
				tcgplayer: 274445
			}
		},
	],
}

export default card
