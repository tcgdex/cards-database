import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Drednaw V",
		fr: "Torgamord V",
		es: "Drednaw V",
		it: "Drednaw V",
		pt: "Drednaw V",
		de: "Kamalm V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [834],
	set: Set,
	hp: 210,

	types: [
		"Water",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
				es: "Caparazón Sólido",
				it: "Guscio Solido",
				pt: "Carapaça Sólida",
				de: "Solider Panzer"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	attacks: [{
		name: {
			en: "Powerful Bite",
			fr: "Morsure Puissante",
			es: "Mordisco Potente",
			it: "Morso Potente",
			pt: "Mordida Poderosa",
			de: "Starker Biss"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
