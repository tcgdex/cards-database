import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Diving Uppercut",
			'fr-fr': "Uppercut Plongeant",
			'es-es': "Salto Gancho",
			'it-it': "Tuffomontante",
			'pt-br': "Gancho Mergulhador",
			'de-de': "Hechtender Kinnhaken"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 more damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño más a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It bounces toward opponents and gouges them with poisonous claws. No more than a scratch is needed to knock out its adversaries.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682157,
				tcgplayer: 451764
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682157,
				tcgplayer: 451764
			}
		},
	],
}

export default card
