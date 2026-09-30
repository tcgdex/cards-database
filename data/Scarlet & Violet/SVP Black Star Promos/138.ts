import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Powered Ball",
			fr: "Boule Puissante",
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "GOSSAN",
	description: {
		en: "After artificial intelligence was implemented in Porygon2, the Pokémon began using a strange language that only other Porygon2 understand.",
		fr: "Depuis qu'on l'a doté d'une intelligence artificielle, il parle un langage mystérieux que seuls ses congénères comprennent.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 785847,
				tcgplayer: 585577
			},
		}
	],
}

export default card
