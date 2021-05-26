import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V",
		fr: "Zacian V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Intrepid Sword",
			fr: "Lame Indomptable"
		},

		effect: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Metal Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis attacher à ce Pokémon le nombre voulu de cartes Énergie Metal que vous y trouvez. Ajoutez les autres cartes à votre main. Si vous utilisez ce talent, votre tour se termine."
		}
	}],

	attacks: [{
		name: {
			en: "Brave Blade",
			fr: "Lame Vaillante"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card