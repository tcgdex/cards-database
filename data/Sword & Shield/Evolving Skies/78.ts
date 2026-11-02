import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yukiko Baba",

	attacks: [{
		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Flap",
			de: "Flattern"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,

	description: {
		en: "An opponent's aura can tell Cutiefly what that opponent's next move will be. Then Cutiefly can glide around the attack and strike back.",
		de: "Es nimmt die Aura seiner Feinde wahr und erahnt ihren nächsten Zug. So kann es Angriffen geschickt ausweichen und zurückschlagen."
	},

	dexId: [742],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574126,
				tcgplayer: 246862
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574126,
				tcgplayer: 246862
			}
		},
	],
}

export default card
