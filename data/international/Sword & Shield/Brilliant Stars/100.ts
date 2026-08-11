import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Guard Claw",
			'fr-fr': "Griffe de Garde",
			'es-es': "Garra Guardia",
			'it-it': "Difesartiglio",
			'pt-br': "Garra Protetora",
			'de-de': "Abwehrklaue"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Hammer",
			'fr-fr': "Marteau de Fer",
			'es-es': "Martillo de Hierro",
			'it-it': "Maglio d'Acciaio",
			'pt-br': "Martelo de Ferro",
			'de-de': "Eisenhammer"
		},

		effect: {
			'en-us': "If this Pokémon has any Fire Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si au moins une Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608646,
				tcgplayer: 263819
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608646,
				tcgplayer: 263819
			}
		},
	],
}

export default card
