import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Sylveroy Cavalier d’Effroi V",
		en: "Shadow Rider Calyrex V"
	},

	illustrator: "kodama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Brume d’Effroi",
			en: "Shadow Mist"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Énergie spéciale ou Stade de sa main.",
			en: "During your opponent’s next turn, they can’t play any Special Energy or Stadium cards from their hand."
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			fr: "Éclat Spectral",
			en: "Astral Barrage"
		},

		effect: {
			fr: "Choisissez 2 des Pokémon de votre adversaire, puis placez 5 marqueurs de dégâts sur chacun d’eux.",
			en: "Choose 2 of your opponent’s Pokémon and put 5 damage counters on each of them."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card