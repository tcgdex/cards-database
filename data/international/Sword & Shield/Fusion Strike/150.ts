import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [759],
	set: Set,

	name: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "The way it protects itself by flailing its arms may be an adorable sight, but stay well away. This is flailing that can snap thick tree trunks."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			es: "Toque",
			pt: "Pulso",
			it: "Battuta"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			es: "Rodar",
			pt: "Rolagem",
			it: "Rotolamento"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582778,
				tcgplayer: 253364
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582778,
				tcgplayer: 253364
			}
		},
	],
}

export default card
