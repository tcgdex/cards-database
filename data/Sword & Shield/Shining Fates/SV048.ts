import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galopa de Galar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Ponyta de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Voile Pastel"
		},

		effect: {
			fr: "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial."
		}
	}],

	attacks: [{
		name: {
			fr: "Psyko"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
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

	retreat: 1
}

export default card