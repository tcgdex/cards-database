import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
		de: "Quappo"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knuckle Punch",
				fr: "Coud’Phalange",
				es: "Puño con Nudillos",
				it: "Noccapugno",
				pt: "Soco com Punho",
				de: "Knöchelhieb"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swirly Rush",
				fr: "Ruée en Tourbillon",
				es: "Embestida Remolino",
				it: "Arrembaggio Spirale",
				pt: "Investida Espiral",
				de: "Wirbelrausch"
			},
			effect: {
				en: "If Poliwag and Poliwhirl are on your Bench, this attack does 90 more damage.",
				fr: "Si Ptitard et Têtarte sont sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si Poliwag y Poliwhirl están en tu Banca, este ataque hace 90 puntos de daño más.",
				it: "Se Poliwag e Poliwhirl sono nella tua panchina, questo attacco infligge 90 danni in più.",
				pt: "Se Poliwag e Poliwhirl estiverem no seu Banco, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn sich Quapsel und Quaputzi auf deiner Bank befinden, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 372330,
		tcgplayer: 189114
	}
}

export default card
