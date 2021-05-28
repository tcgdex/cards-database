import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Celebi",
		en: "Celebi"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Promenade Sylvestre",
			en: "Woodland Stroll"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer une carte Énergie que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal an Energy card you find there, and put it into your hand. Shuffle the other cards back into your deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Enjambée de Feuillage",
			en: "Leaf Step"
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