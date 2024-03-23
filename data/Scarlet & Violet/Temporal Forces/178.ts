import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Meteor Mash",
			fr: "Poing Météore",
			es: "Puño Meteoro",
			it: "Meteorpugno",
			pt: "Meteoro Esmagador"
		},

		effect: {
			en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Meteorpugno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Meteoro Esmagador deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência)."
		},

		damage: 60
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Luster Blast",
			fr: "Explosion Étincelante",
			es: "Explosión Luciente",
			it: "Puliscoppio",
			pt: "Lustre Explosivo"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card