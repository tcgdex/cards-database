import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [282],
	set: Set,

	name: {
		en: "Gardevoir ex"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Imprison"
		},

		effect: {
			en: "Once during your turn (before your attack), if Gardevoir ex is your Active Pokémon, you may put an Imprison marker on 1 of your opponent's Pokémon. Any Pokémon that has any Imprison markers on it can't use any Poké-Powers or Poké-Bodies. This power can't be used if Gardevoir ex is affected by a Special Condition."
		}
	}],

	attacks: [{
		name: {
			en: "Flame Ball"
		},

		effect: {
			en: "You may move a Fire Energy card attached to Gardevoir ex to 1 of your Benched Pokémon."
		},

		damage: 80,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: ""
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576784
	}
}

export default card
