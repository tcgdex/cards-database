import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina",
	},

	illustrator: "Taiga Kasai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [30],

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran",
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Share Happiness",
			fr: "Partage de Bonheur",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Heal 30 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Soignez 30 dégâts de l'un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895604,
				tcgplayer: 713260
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 895605,
				tcgplayer: 713261
			}
		}
	],
}

export default card
