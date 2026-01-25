import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		en: "Charizard",
		fr: "Palkia"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Fire Spin",
			fr: "Boost Atomisant"
		},

		effect: {
			en: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
			fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: ""
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,

	description: {
		en: "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires."
	},

	abilities: [{
		type: "Pokemon Power",

		name: {
			en: "Energy Burn",
			fr: "Espace Absolu"
		},

		effect: {
			en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main."
		}
	}],

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576772
	}
}

export default card
