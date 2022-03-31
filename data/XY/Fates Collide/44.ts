import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
		es: "Wormadam",
		it: "Wormadam",
		pt: "Wormadam",
		de: "Burmadame"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		413,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
		es: "Burmy",
		it: "Burmy",
		pt: "Burmy",
		de: "Burmy"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand Spray",
				fr: "Jet Sableux",
				es: "Rociado de Arena",
				it: "Silicospruzzo",
				pt: "Spray de Areia",
				de: "Sandspray"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twin Bursts",
				fr: "Explosions en Duo",
				es: "Estallidos Gemelos",
				it: "Scoppiogemello",
				pt: "Erupções Gêmeas",
				de: "Doppelsalve"
			},
			effect: {
				en: "If Mothim is on your Bench, this attack does 60 more damage.",
				fr: "Si Papilord est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si Mothim está en tu Banca, este ataque hace 60 puntos de daño más.",
				it: "Se Mothim è nella tua panchina, questo attacco infligge 60 danni in più.",
				pt: "Se Mothim estiver no seu Banco, este ataque causará 60 de danos adicionais.",
				de: "Wenn sich Moterpel auf deiner Bank befindet, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
