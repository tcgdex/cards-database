import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		fr: "Phyllali VSTAR",
		de: "Folipurba VSTAR",
		es: "Leafeon V-ASTRO",
		pt: "Leafeon V-ASTRO",
		it: "Leafeon V ASTRO",
		en: "Leafeon VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		fr: "Phyllali-V",
		de: "Folipurba-V",
		es: "Leafeon V",
		pt: "Leafeon V",
		it: "Leafeon-V",
		en: "Leafeon V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Feuille Garde",
			de: "Floraschild",
			es: "Defensa Hoja",
			pt: "Guarda Folha",
			it: "Fogliamanto",
			en: "Leaf Guard"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card