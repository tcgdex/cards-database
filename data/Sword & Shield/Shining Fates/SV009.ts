import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Astronelle",
		en: "Orbeetle"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		fr: "Coléodôme",
		en: "Dottler"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Radar d’Insecte",
			en: "Bug’s Radar"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l’ordre désiré.",
			en: "Once during your turn, you may look at the top 3 cards of your opponent’s deck and put them back in any order."
		}
	}],

	attacks: [{
		name: {
			fr: "Onde Cérébrale",
			en: "Brainwave"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon."
		},

		damage: "90+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card