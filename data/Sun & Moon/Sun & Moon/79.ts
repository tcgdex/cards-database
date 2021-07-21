import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Persian",
		fr: "Persian d’Alola",
		es: "Persian de Alola",
		it: "Persian di Alola",
		pt: "Persian de Alola",
		de: "Alola-Snobilikat"
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Taunt",
				fr: "Provoc",
				es: "Mofa",
				it: "Provocazione",
				pt: "Insulto",
				de: "Verhöhner"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Claw Rend",
				fr: "Déchirure",
				es: "Quebrantar",
				it: "Artiglilaceranti",
				pt: "Lacerar",
				de: "Reißer"
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já possuir contadores de dano nele, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
