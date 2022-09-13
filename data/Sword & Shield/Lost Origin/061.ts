import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Coil",
			fr: "Enroulement",
			es: "Enrosque",
			it: "Arrotola",
			pt: "Enroscar",
			de: "Einrollen"
		},

		effect: {
			en: "During your next turn, this Pokémon's attacks do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, los ataques de este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, os ataques deste Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Extreme Current",
			fr: "Courant Extrême",
			es: "Corriente Extrema",
			it: "Correntestrema",
			pt: "Corrente Extrema",
			de: "Extreme Strömung"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card