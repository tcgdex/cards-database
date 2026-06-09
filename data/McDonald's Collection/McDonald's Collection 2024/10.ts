import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [635],

	hp: 180,

	types: ["Darkness"],

	stage: "Stage2",

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tri Howl"
			},
			effect: {
				en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Discard the other cards."
			}
		}
	],

	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				en: "Dark Cutter",
			},
			damage: 160,
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802832,
				tcgplayer: 614379
			}
		}
	]
}

export default card

