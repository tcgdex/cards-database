import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [829],
	set: Set,

	name: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		en: "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			de: "Blattwerk",
			es: "Follaje",
			pt: "Folhagem",
			it: "Fogliame"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582089,
				tcgplayer: 253115
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582089,
				tcgplayer: 253115
			}
		},
	],
}

export default card
