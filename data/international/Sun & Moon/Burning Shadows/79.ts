import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Passimian",
		'fr-fr': "Quartermac",
		'es-es': "Passimian",
		'it-it': "Passimian",
		'pt-br': "Passimian",
		'de-de': "Quartermak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		766,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud’Poing",
				'es-es': "Puño",
				'it-it': "Pugno",
				'pt-br': "Soco",
				'de-de': "Boxhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Intentional Grounding",
				'fr-fr': "Mauvais Lancer",
				'es-es': "Saque de Banda",
				'it-it': "Punizione Volontaria",
				'pt-br': "Reversão de Lateral",
				'de-de': "Absichtlicher Fehlpass"
			},
			effect: {
				'en-us': "Discard a Pokémon Tool card from your hand. If you don’t, this attack does nothing.",
				'fr-fr': "Défaussez une carte Outil Pokémon de votre main. Sinon, cette attaque ne fait rien.",
				'es-es': "Descarta 1 carta de Herramienta Pokémon de tu mano. Si no lo haces, este ataque no hace nada.",
				'it-it': "Scarta una delle carte Oggetto Pokémon che hai in mano. Se non lo fai, questo attacco non ha effetto.",
				'pt-br': "Descarte 1 carta de Ferramenta Pokémon da sua mão. Se não fizer isto, este ataque não fará nada.",
				'de-de': "Lege 1 Pokémon-Ausrüstung aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machst, hat diese Attacke keine Auswirkungen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They form groups of roughly 20 individuals. Their mutual bond is remarkable—they will never let down a comrade.",
	},

	thirdParty: {
		cardmarket: 299481,
		tcgplayer: 138565
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
