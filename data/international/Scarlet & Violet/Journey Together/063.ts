import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'de-de': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'es-mx': "Metagross"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'de-de': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'es-mx': "Metang"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Wrack Down",
			'fr-fr': "Réduire en Poussière",
			'es-es': "Desmoronar",
			'de-de': "Niederschleudern",
			'it-it': "Abbattere",
			'pt-br': "Desmoronar",
			'es-mx': "Desmoronar"
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Conjoined Beams",
			'fr-fr': "Rayons Unis",
			'es-es': "Rayos Entrelazados",
			'de-de': "Verbundene Strahlen",
			'it-it': "Raggi Congiunti",
			'pt-br': "Feixes Conjugados",
			'es-mx': "Rayos Fusionados"
		},

		effect: {
			'en-us': "If Beldum and Metang are on your Bench, this attack does 150 more damage.",
			'fr-fr': "Si Terhal et Métang sont sur votre Banc, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si Beldum y Metang están en tu Banca, este ataque hace 150 puntos de daño más.",
			'de-de': "Wenn sich Tanhel und Metang auf deiner Bank befinden, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			'it-it': "Se Beldum e Metang sono nella tua panchina, questo attacco infligge 150 danni in più.",
			'pt-br': "Se Beldum e Metang estiverem no seu Banco, este ataque causará 150 pontos de dano a mais.",
			'es-mx': "Si Beldum y Metang están en tu Banca, este ataque hace 150 puntos de daño más."
		},

		damage: "130+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Mitsuhiro Arita",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817215,
				tcgplayer: 623490
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817215,
				tcgplayer: 623490
			}
		},
	],
}

export default card
