import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		de: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		'es-mx': "Metagross"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière",
			es: "Desmoronar",
			de: "Niederschleudern",
			it: "Abbattere",
			pt: "Desmoronar",
			'es-mx': "Desmoronar"
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Conjoined Beams",
			fr: "Rayons Unis",
			es: "Rayos Entrelazados",
			de: "Verbundene Strahlen",
			it: "Raggi Congiunti",
			pt: "Feixes Conjugados",
			'es-mx': "Rayos Fusionados"
		},

		effect: {
			en: "If Beldum and Metang are on your Bench, this attack does 150 more damage.",
			fr: "Si Terhal et Métang sont sur votre Banc, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si Beldum y Metang están en tu Banca, este ataque hace 150 puntos de daño más.",
			de: "Wenn sich Tanhel und Metang auf deiner Bank befinden, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			it: "Se Beldum e Metang sono nella tua panchina, questo attacco infligge 150 danni in più.",
			pt: "Se Beldum e Metang estiverem no seu Banco, este ataque causará 150 pontos de dano a mais.",
			'es-mx': "Si Beldum y Metang están en tu Banca, este ataque hace 150 puntos de daño más."
		},

		damage: "130+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
