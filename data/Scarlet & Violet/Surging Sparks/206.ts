import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava",
		de: "Vibrava"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Screech",
			fr: "Grincement",
			es: "Chirrido",
			it: "Stridio",
			pt: "Agudo",
			de: "Kreideschrei"
		},

		effect: {
			en: "During your next turn, the Defending Pokémon takes 50 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 50 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, los ataques hacen 50 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, il Pokémon difensore subisce 50 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o Pokémon Defensor receberá 50 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 50 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
