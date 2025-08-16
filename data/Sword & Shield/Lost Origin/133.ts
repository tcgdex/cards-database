import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [705],
	set: Set,

	name: {
		en: "Hisuian Sliggoo",
		fr: "Colimucus de Hisui",
		es: "Sliggoo de Hisui",
		it: "Sliggoo di Hisui",
		pt: "Sliggoo de Hisui",
		de: "Hisui Viscargot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		it: "Goomy",
		pt: "Goomy",
		de: "Viscora"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rigidify",
			fr: "Solidification",
			es: "Rigidez",
			it: "Irrigidimento",
			pt: "Enrijecer",
			de: "Verfestiger"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Water", "Metal"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674145,
		tcgplayer: 284054
	}
}

export default card