import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [599],
	set: Set,

	name: {
		en: "Klink",
		fr: "Tic",
		es: "Klink",
		it: "Klink",
		pt: "Klink",
		de: "Klikk"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "The two minigears that compose this Pokémon are closer than twins. They mesh well only with each other.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608648,
				tcgplayer: 263822
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608648,
				tcgplayer: 263822
			}
		},
	],
}

export default card
