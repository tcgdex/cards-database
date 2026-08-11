import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

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
				'en-us': "Palette of Friends",
				'fr-fr': "Palette d’Amis",
				'es-es': "Paleta de Amigos",
				'it-it': "Amici Diversi",
				'pt-br': "Palheta de Amigos",
				'de-de': "Freundespalette"
			},
			effect: {
				'en-us': "This attack does 10 damage for each different type of Pokémon on your Bench.",
				'fr-fr': "Cette attaque inflige 10 dégâts pour chaque type différent de Pokémon sur votre Banc.",
				'es-es': "Este ataque hace 10 puntos de daño por cada tipo de Pokémon diferente en tu Banca.",
				'it-it': "Questo attacco infligge 10 danni per ogni Pokémon di tipo diverso nella tua panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano para cada tipo diferente de Pokémon no seu Banco.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der verschiedenen Pokémon-Typen auf deiner Bank zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Possessing an unbalanced and unstable genetic makeup, it conceals many possible evolutions.",
	},

	thirdParty: {
		cardmarket: 316030,
		tcgplayer: 157722
	}
}

export default card
