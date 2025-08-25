import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [706],
	set: Set,

	name: {
		en: "Hisuian Goodra VSTAR",
		fr: "Muplodocus de Hisui VSTAR",
		es: "Goodra de Hisui V-ASTRO",
		it: "Goodra di Hisui V ASTRO",
		pt: "Goodra de Hisui V-ASTRO",
		de: "Hisui Viscogon-VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],

	evolveFrom: {
		en: "Hisuian Goodra V",
		fr: "Muplodocus de Hisui-V",
		es: "Goodra de Hisui V",
		it: "Goodra di Hisui-V",
		pt: "Goodra de Hisui V",
		de: "Hisui-Viscogon-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Metal", "Colorless"],

		name: {
			en: "Rolling Iron",
			fr: "Fer Roulant",
			es: "Giro Férreo",
			it: "Ferro Rotolante",
			pt: "Ferrolante",
			de: "Rollendes Eisen"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 80 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 80 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 80 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 80 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 80 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 80 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670818,
		tcgplayer: 284157
	}
}

export default card