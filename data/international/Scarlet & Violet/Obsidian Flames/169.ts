import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [333],
	set: Set,

	name: {
		'fr-fr': "Tylton",
		'en-us': "Swablu",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Protection Duveteuse",
			'en-us': "Fluffy Guard",
			'es-es': "Defensa Esponjosa",
			'it-it': "Morbiscudo",
			'pt-br': "Proteção Felpuda",
			'de-de': "Flauschiger Schutz"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 20
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
	regulationMark: "G",

	description: {
		'en-us': "It constantly grooms its cotton-like wings. It takes a shower to clean itself if it becomes dirty.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725249,
				tcgplayer: 509698,
				cardtrader: 256065
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725249,
				tcgplayer: 509698,
				cardtrader: 256065
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
