import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Celebi"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Promenade Sylvestre"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer une carte Énergie que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Enjambée de Feuillage"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card