import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [505],
	set: Set,

	name: {
		en: "Watchog",
		fr: "Miradar",
		de: "Kukmarda",
		it: "Watchog",
		pt: "Watchog",
		es: "Watchog",
		'es-mx': "Watchog"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		de: "Nagelotz",
		it: "Patrat",
		pt: "Patrat",
		es: "Patrat",
		"es-mx": "Patrat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Focus Energy",
			fr: "Puissance",
			de: "Energiefokus",
			it: "Focalenergia",
			pt: "Focalizar Energia",
			es: "Foco Energía",
			'es-mx': "Centrar Energía"
		},

		effect: {
			en: "During your next turn, this Pokémon's Hyper Fang attack's base damage is 240.",
			fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Croc de Mort de ce Pokémon sont de 240.",
			de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Hyperzahn dieses Pokémon 240 Schadenspunkte.",
			it: "Durante il tuo prossimo turno, i danni base dell'attacco Iperzanna di questo Pokémon sono 240.",
			pt: "Durante o seu próximo turno, o dano base do ataque Hiperpresa deste Pokémon será 240.",
			es: "Durante tu próximo turno, el daño básico del ataque Hipercolmillo de este Pokémon es de 240 puntos de daño.",
			'es-mx': "Durante tu próximo turno, el daño base del ataque Hipercolmillo de este Pokémon es de 240 puntos de daño."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort",
			de: "Hyperzahn",
			it: "Iperzanna",
			pt: "Hiperpresa",
			es: "Hipercolmillo",
			'es-mx': "Hipercolmillo"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836188
	}
}

export default card