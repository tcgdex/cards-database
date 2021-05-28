import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galopa de Galar",
		en: "Galarian Rapidash"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Ponyta de Galar",
		en: "Galarian Ponyta"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Voile Pastel",
			en: "Pastel Veil"
		},

		effect: {
			fr: "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial.",
			en: "Your Pokémon recover from all Special Conditions and can’t be affected by any Special Conditions."
		}
	}],

	attacks: [{
		name: {
			fr: "Psyko",
			en: "Psychic"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon."
		},

		damage: "30+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card