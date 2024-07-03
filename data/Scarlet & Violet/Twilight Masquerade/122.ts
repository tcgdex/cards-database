import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [306],
	set: Set,

	name: {
		en: "Aggron",
		fr: "Galeking",
		es: "Aggron",
		it: "Aggron",
		pt: "Aggron",
		de: "Stolloss"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Angry Slam",
			fr: "Poussée Furieuse",
			es: "Golpe Ira",
			it: "Schianto Furioso",
			pt: "Pancada Raivosa",
			de: "Wütender Hieb"
		},

		effect: {
			en: "This attack does 50 damage for each of your Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
			it: "Questo attacco infligge 50 danni per ogni tuo Pokémon che ha dei segnalini danno.",
			pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon que tem algum contador de dano nele.",
			de: "Diese Attacke fügt für jedes deiner Pokémon, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Guard Claw",
			fr: "Griffe de Garde",
			es: "Garra Guardia",
			it: "Difesartiglio",
			pt: "Garra Protetora",
			de: "Abwehrklaue"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card