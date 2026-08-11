import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Throh",
		'fr-fr': "Judokrak",
		'es-es': "Throh",
		'it-it': "Throh",
		'pt-br': "Throh",
		'de-de': "Jiutesto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		538,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Reverse Shoulder Throw",
				'fr-fr': "Ippon Seoi Nage",
				'es-es': "Llave de Hombro Invertida",
				'it-it': "Proiezione Dorsale Inversa",
				'pt-br': "Arremesso Inverso",
				'de-de': "Umgekehrter Schulterwurf"
			},
			effect: {
				'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 90 puntos de daño más.",
				'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When it tightens its belt, it becomes stronger. Wild Throh use vines to weave their own belts.",
	},

	thirdParty: {
		cardmarket: 408239,
		tcgplayer: 201150
	}
}

export default card
