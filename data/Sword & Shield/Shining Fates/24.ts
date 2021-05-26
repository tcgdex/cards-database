import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Manaphy"
	},

	illustrator: "Narumi Sato",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Recherche Océanique"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer un Pokémon que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Grosse Vague"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card