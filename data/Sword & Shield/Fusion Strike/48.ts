import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		en: "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Coil",
			fr: "Enroulement",
			de: "Einrollen",
			es: "Enrosque",
			pt: "Enroscar",
			it: "Arrotola"
		},

		damage: 30,

		effect: {
			en: "During your next turn, this Pokémon's attacks do 90 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 90 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 90 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Durante tu próximo turno, los ataques de este Pokémon hacen 90 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o seu próximo turno, os ataques deste Pokémon causarão 90 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			it: "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 90 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Burning Train",
			fr: "Train Brûlant",
			de: "Brennender Zug",
			es: "Tren Ardiente",
			pt: "Trem Incendiário",
			it: "Treno Infuocato"
		},

		damage: 120
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card