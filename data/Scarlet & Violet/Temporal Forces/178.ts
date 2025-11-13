import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		de: "Metagross"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Meteor Mash",
			fr: "Poing Météore",
			es: "Puño Meteoro",
			it: "Meteorpugno",
			pt: "Meteoro Esmagador",
			de: "Sternenhieb"
		},

		effect: {
			en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Meteorpugno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Meteoro Esmagador deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Sternenhieb dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 60
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Luster Blast",
			fr: "Explosion Étincelante",
			es: "Explosión Luciente",
			it: "Puliscoppio",
			pt: "Lustre Explosivo",
			de: "Schimmernde Entladung"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Katsunori Sato",

	thirdParty: {
		cardmarket: 760808
	}
}

export default card