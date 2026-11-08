import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
		'es-es': "Código Cero",
		'it-it': "Tipo Zero",
		'pt-br': "Tipo Nulo",
		'de-de': "Typ:Null"
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
				'en-us': "Merciless Strike",
				'fr-fr': "Impact Impitoyable",
				'es-es': "Golpe Despiadado",
				'it-it': "Colpo Implacabile",
				'pt-br': "Golpe Impiedoso",
				'de-de': "Gnadenloser Schlag"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver contadores de dano nele, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 30 Schadenspunkte mehr zu."
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
				'en-us': "Headbang",
				'fr-fr': "Frappe de Tête",
				'es-es': "Cabecear",
				'it-it': "Scuotitesta",
				'pt-br': "Baque de Cabeça",
				'de-de': "Headbangen"
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

	description: {
		'en-us': "The heavy control mask it wears suppresses its intrinsic capabilities. This Pokémon has some hidden special power.",
	},

	thirdParty: {
		cardmarket: 316041,
		tcgplayer: 157732
	}
}

export default card
