import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Passimian",
		fr: "Quartermac",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
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
				en: "Punch",
				fr: "Koud’Poing",
				es: "Puño",
				it: "Pugno",
				pt: "Soco",
				de: "Boxhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Intentional Grounding",
				fr: "Mauvais Lancer",
				es: "Saque de Banda",
				it: "Punizione Volontaria",
				pt: "Reversão de Lateral",
				de: "Absichtlicher Fehlpass"
			},
			effect: {
				en: "Discard a Pokémon Tool card from your hand. If you don’t, this attack does nothing.",
				fr: "Défaussez une carte Outil Pokémon de votre main. Sinon, cette attaque ne fait rien.",
				es: "Descarta 1 carta de Herramienta Pokémon de tu mano. Si no lo haces, este ataque no hace nada.",
				it: "Scarta una delle carte Oggetto Pokémon che hai in mano. Se non lo fai, questo attacco non ha effetto.",
				pt: "Descarte 1 carta de Ferramenta Pokémon da sua mão. Se não fizer isto, este ataque não fará nada.",
				de: "Lege 1 Pokémon-Ausrüstung aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machst, hat diese Attacke keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 299481,
		tcgplayer: 138565
	}
}

export default card
