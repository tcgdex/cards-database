import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [748],
	set: Set,

	name: {
		'en-us': "Toxapex",
		'fr-fr': "Prédastérie",
		'es-es': "Toxapex",
		'it-it': "Toxapex",
		'pt-br': "Toxapex",
		'de-de': "Aggrostella"
	},

	illustrator: "Ligton",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
		'es-es': "Mareanie",
		'it-it': "Mareanie",
		'pt-br': "Mareanie",
		'de-de': "Garstella"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'es-es': "Carga Tóxica",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque",
			'de-de': "Giftschock"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Spike Shot",
			'fr-fr': "Tir d'Épines",
			'es-es': "Disparo Púas",
			'it-it': "Sparaculeo",
			'pt-br': "Disparo de Espinhos",
			'de-de': "Dornensalve"
		},

		damage: 90
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
		'en-us': "To survive in the cold waters of Galar, this Pokémon forms a dome with its legs, enclosing its body so it can capture its own body heat.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682162,
				tcgplayer: 451769
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682162,
				tcgplayer: 451769
			}
		},
	],
}

export default card
