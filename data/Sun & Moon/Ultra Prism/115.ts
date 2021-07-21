import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Type: Null",
		fr: "Type:0",
		es: "Código Cero",
		it: "Tipo Zero",
		pt: "Tipo Nulo",
		de: "Typ:Null"
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		772,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Merciless Strike",
				fr: "Impact Impitoyable",
				es: "Golpe Despiadado",
				it: "Colpo Implacabile",
				pt: "Golpe Impiedoso",
				de: "Gnadenloser Schlag"
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver contadores de dano nele, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbang",
				fr: "Frappe de Tête",
				es: "Cabecear",
				it: "Scuotitesta",
				pt: "Baque de Cabeça",
				de: "Headbangen"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
