import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tapu Bulu",
		'fr-fr': "Tokotoro",
		'es-es': "Tapu Bulu",
		'it-it': "Tapu Bulu",
		'pt-br': "Tapu Bulu",
		'de-de': "Kapu-Toro"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		786,
	],
	hp: 130,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Horn Leech",
				'fr-fr': "Encornebois",
				'es-es': "Asta Drenaje",
				'it-it': "Legnicorno",
				'pt-br': "Chifre Sugador",
				'de-de': "Holzgeweih"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Calm Strike",
				'fr-fr': "Frappe Placide",
				'es-es': "Golpe Calmado",
				'it-it': "Colpo Impassibile",
				'pt-br': "Golpe Calmo",
				'de-de': "Gelassener Schlag"
			},
			effect: {
				'en-us': "If you have used your GX attack, this attack does 60 more damage.",
				'fr-fr': "Si vous avez utilisé votre attaque GX, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si has usado tu ataque GX, este ataque hace 60 puntos de daño más.",
				'it-it': "Se hai già usato il tuo attacco GX, questo attacco infligge 60 danni in più.",
				'pt-br': "Se você usou seu ataque GX, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn du deine GX-Attacke eingesetzt hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "It pulls large trees up by the roots and swings them around. It causes vegetation to grow, and then it absorbs energy from the growth.",
	},
}

export default card
