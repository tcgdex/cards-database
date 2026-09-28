import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
	},

	illustrator: "Taira Akitsu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",
	dexId: [144],

	abilities: [{
		type: "Ability",

		name: {
			en: "Frosty Flapping",
			fr: "Battements Givrés",
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Zapdos in play, you may use this Ability. Attach a Basic {W} Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Sulfura et Électhor en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {W} de base de votre main à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Hail",
			fr: "Grêle",
		},

		effect: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895607,
				tcgplayer: 713265
			}
		}
	],
}

export default card
