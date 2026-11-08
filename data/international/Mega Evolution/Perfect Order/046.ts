import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [701],

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'es-mx': "Hawlucha",
		'de-de': "Resladero",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha"
	},

	illustrator: "osare",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Vengeful Kick",
			'fr-fr': "Coup de Pied Vengeur",
			'es-es': "Patada Vengativa",
			'es-mx': "Patada Vengativa",
			'de-de': "Rachekick",
			'it-it': "Calcio Vendicativo",
			'pt-br': "Chute Vingativo"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 60 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 60 puntos de daño más.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se i Pokémon nella tua panchina hanno dei segnalini danno, questo attacco infligge 60 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 60 pontos de dano a mais."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684428,
				cardmarket: 877460
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684428,
				cardmarket: 877460
			}
		}
	],

}

export default card
