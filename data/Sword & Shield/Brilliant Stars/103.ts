import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
		es: "Klink",
		it: "Klink",
		pt: "Klink",
		de: "Klikk"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
			es: "Presión de Guardia",
			it: "Pressadifesa",
			pt: "Aperto Protetor",
			de: "Schutzdruck"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card