import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		de: "Honweisel"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Commanding Queen",
				fr: "Reine Imposante",
				es: "Reina al Mando",
				it: "Regina Condottiera",
				pt: "Rainha Comandante",
				de: "Herrschende Königin"
			},
			effect: {
				en: "If you have 4 or fewer Grass Pokémon on your Bench, this attack does nothing.",
				fr: "Si vous avez 4 Pokémon Grass ou moins sur votre Banc, cette attaque ne fait rien.",
				es: "Si tienes 4 o menos Pokémon Grass en tu Banca, este ataque no hace nada.",
				it: "Se hai quattro o meno Pokémon Grass in panchina, questo attacco non ha effetto.",
				pt: "Se você tiver 4 ou menos Pokémon Grass no seu Banco, este ataque não fará nada.",
				de: "Wenn du 4 oder weniger Grass-Pokémon auf deiner Bank hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365672,
		tcgplayer: 178833
	}
}

export default card
