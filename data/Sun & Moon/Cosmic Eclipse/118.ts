import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
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
				en: "Reverse Shoulder Throw",
				fr: "Ippon Seoi Nage",
				es: "Llave de Hombro Invertida",
				it: "Proiezione Dorsale Inversa",
				pt: "Arremesso Inverso",
				de: "Umgekehrter Schulterwurf"
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 90 puntos de daño más.",
				it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 90 danni in più.",
				pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
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



}

export default card
