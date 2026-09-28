import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
	},

	illustrator: "Krgc",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",
	dexId: [146],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fiery Flapping",
			fr: "Battements Ardents",
		},

		effect: {
			en: "Once during your turn, if you have Articuno and Zapdos in play, you may use this Ability. Attach a Basic {R} Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Artikodin et Électhor en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {R} de base de votre main à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895606,
				tcgplayer: 713264
			}
		}
	],
}

export default card
