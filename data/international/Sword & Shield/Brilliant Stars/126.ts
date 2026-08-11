import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'es-es': "Tornadus",
		'it-it': "Tornadus",
		'pt-br': "Tornadus",
		'de-de': "Boreos"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
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
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blasting Wind",
			'fr-fr': "Vent Impitoyable",
			'es-es': "Vientos Explosivos",
			'it-it': "Vento Distruttivo",
			'pt-br': "Vendaval Avassalador",
			'de-de': "Peitschender Wind"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608672,
				tcgplayer: 263849
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608672,
				tcgplayer: 263849
			}
		},
	],
}

export default card
