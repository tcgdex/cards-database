import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Tyranitar",
		fr: "Tyranocif brillant"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il est si puissant qu'il peut renverser une montagne d'un coup de coude."
	},

	attacks: [{
		cost: ["Darkness", "Fighting", "Fighting"],

		name: {
			fr: "Écrase-montagne"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à faire pile. Pour chaque face, votre adversaire se défausse de la carte du dessus de son deck."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Fire", "Fire", "Fire"],

		name: {
			fr: "Feu destructeur"
		},

		effect: {
			fr: "Lancez une pièce pour chaque carte Énergie  attachée à Tyranocif brillant. Pour chaque face, défaussez-vous d'une carte Énergie  attachée à Tyranocif brillant ou cette attaque ne fait rien. Puis, pour chaque face, choisissez une carte Énergie attachée au Pokémon Défenseur et obligez votre adversaire à s'en défausser. S'il a moins de cartes Énergie, il doit se défausser de toutes ses cartes Énergie."
		},

		damage: 50
	}]
}

export default card
