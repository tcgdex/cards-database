import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		'en-us': "Machamp V",
		'fr-fr': "Mackogneur V",
		'es-es': "Machamp V",
		'it-it': "Machamp V",
		'pt-br': "Machamp V",
		'de-de': "Machomei V"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Revenge Buster",
			'fr-fr': "Buster Vengeur",
			'es-es': "Venganza Destructora",
			'it-it': "Vendetta Distruttiva",
			'pt-br': "Vingança Aniquiladora",
			'de-de': "Vergeltungsschlag"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 50 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 50 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 50 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'pt-br': "Arremesso Sísmico",
			'de-de': "Geowurf"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658832,
				tcgplayer: 272421
			}
		},
	],
}

export default card
