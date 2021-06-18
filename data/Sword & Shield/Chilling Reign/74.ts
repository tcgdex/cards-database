import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Shadow Rider Calyrex V",
		fr: "Sylveroy Cavalier d’Effroi V"
	},

	illustrator: "D.A.G Inc.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Shadow Mist",
			fr: "Brume d’Effroi"
		},

		effect: {
			en: "During your opponent’s next turn, they can’t play any Special Energy or Stadium cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Énergie spéciale ou Stade de sa main."
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Astral Barrage",
			fr: "Éclat Spectral"
		},

		effect: {
			en: "Choose 2 of your opponent’s Pokémon and put 5 damage counters on each of them.",
			fr: "Choisissez 2 des Pokémon de votre adversaire, puis placez 5 marqueurs de dégâts sur chacun d’eux."
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