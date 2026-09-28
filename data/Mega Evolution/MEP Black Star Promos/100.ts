import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [700],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Colorful Harmony",
			fr: "Harmonie Colorée",
		},

		effect: {
			en: "This attack does 50 damage for each type of Basic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque type d'Énergie de base attachée à tous vos Pokémon.",
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895612,
				tcgplayer: 713267
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 910856,
				tcgplayer: 713270
			}
		}
	],
}

export default card
