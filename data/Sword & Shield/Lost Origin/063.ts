import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [36],
	set: Set,

	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spirit Charm",
			fr: "Esprit Charmant",
			es: "Encanto Espiritual",
			it: "Spirito Incantevole",
			pt: "Pingente Espectral",
			de: "Zauberamulett"
		},

		effect: {
			en: "All of your Pokémon take 30 less damage from attacks from your opponent's Dragon Pokémon (after applying Weakness and Resistance). You can't apply more than 1 Spirit Charm Ability at a time.",
			fr: "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon Dragon de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu'un talent Esprit Charmant à la fois.",
			es: "Los ataques de los Pokémon Dragon de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Encanto Espiritual a la vez.",
			it: "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon Dragon del tuo avversario, dopo aver applicato debolezza e resistenza. Non puoi applicare più di un'abilità Spirito Incantevole alla volta.",
			pt: "Todos os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon Dragon do seu oponente (depois de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Pingente Espectral por vez.",
			de: "Allen deinen Pokémon werden durch Attacken von Dragon-Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Zauberamulett einsetzen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Moon Impact",
			fr: "Impact Lunaire",
			es: "Impacto Lunar",
			it: "Impatto Lunare",
			pt: "Impacto Lunar",
			de: "Mondeinschlag"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674072
	}
}

export default card