import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [366],
	set: Set,

	name: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Anesaki Dynamic",

	description: {
		en: "Clamperl's pearls are exceedingly precious. They can be more than 10 times as costly as Shellder's pearls."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bursting Bubble",
			fr: "Bulle Éclatante",
			de: "Platzende Blase",
			es: "Burbuja Explosiva",
			pt: "Estouro de Bolha",
			it: "Scoppiobolla"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582199,
				tcgplayer: 253208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582199,
				tcgplayer: 253208
			}
		},
	],
}

export default card
