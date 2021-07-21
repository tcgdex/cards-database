import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
		es: "Tapu Bulu",
		it: "Tapu Bulu",
		pt: "Tapu Bulu",
		de: "Kapu-Toro"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
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
				en: "Horn Leech",
				fr: "Encornebois",
				es: "Asta Drenaje",
				it: "Legnicorno",
				pt: "Chifre Sugador",
				de: "Holzgeweih"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
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
				en: "Calm Strike",
				fr: "Frappe Placide",
				es: "Golpe Calmado",
				it: "Colpo Impassibile",
				pt: "Golpe Calmo",
				de: "Gelassener Schlag"
			},
			effect: {
				en: "If you have used your GX attack, this attack does 60 more damage.",
				fr: "Si vous avez utilisé votre attaque GX, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si has usado tu ataque GX, este ataque hace 60 puntos de daño más.",
				it: "Se hai già usato il tuo attacco GX, questo attacco infligge 60 danni in più.",
				pt: "Se você usou seu ataque GX, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn du deine GX-Attacke eingesetzt hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
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



}

export default card
