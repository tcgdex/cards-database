import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		it: "Heatran",
		pt: "Heatran",
		de: "Heatran"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Guard Claw",
			fr: "Griffe de Garde",
			es: "Garra Guardia",
			it: "Difesartiglio",
			pt: "Garra Protetora",
			de: "Abwehrklaue"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Hammer",
			fr: "Marteau de Fer",
			es: "Martillo de Hierro",
			it: "Maglio d'Acciaio",
			pt: "Martelo de Ferro",
			de: "Eisenhammer"
		},

		effect: {
			en: "If this Pokémon has any Fire Energy attached, this attack does 80 more damage.",
			fr: "Si au moins une Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608646,
		tcgplayer: 263819
	}
}

export default card