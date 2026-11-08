import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		701,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sudden Cyclone",
				'fr-fr': "Cyclone Surprise",
				'es-es': "Ciclón Súbito",
				'it-it': "Ciclone Improvviso",
				'pt-br': "Ciclone Súbito",
				'de-de': "Plötzlicher Sturm"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench, you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Ao jogar este Pokémon da sua mão em seu Banco, você poderá fazer com que seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
				'es-es': "Acróbata",
				'it-it': "Acrobazia",
				'pt-br': "Acrobático",
				'de-de': "Akrobatik"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With its wings, it controls its position in the air. It likes to attack from above, a maneuver that is difficult to defend against.",
	},

	thirdParty: {
		cardmarket: 291656,
		tcgplayer: 121222
	}
}

export default card
