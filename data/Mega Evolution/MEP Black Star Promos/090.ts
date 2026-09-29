import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Darkrai ex",
		fr: "Méga-Darkrai-ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [491],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Dusk Raid",
			fr: "Raid Crépusculaire",
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 110 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 110 dégâts supplémentaires.",
		},

		damage: "110+"
	},
	{
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Abyss Eye",
			fr: "Œil Abyssal",
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, it is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, il est mis K.O.",
		}
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903676,
				tcgplayer: 710756
			}
		}
	],
}

export default card
