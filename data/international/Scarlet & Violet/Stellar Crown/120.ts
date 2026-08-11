import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'es-es': "Tornadus",
		'it-it': "Tornadus",
		'pt-br': "Tornadus",
		'de-de': "Boreos"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'pt-br': "Soco com Punho",
			'de-de': "Knöchelhieb"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Storm Barrier",
			'fr-fr': "Barrière Tempête",
			'es-es': "Barrera Tempestad",
			'it-it': "Barriera Tempestosa",
			'pt-br': "Barreira Tempestuosa",
			'de-de': "Sturmbarriere"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785974,
				tcgplayer: 567346
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785974,
				tcgplayer: 567346
			}
		},
	],

	illustrator: "Uninori",

}

export default card
