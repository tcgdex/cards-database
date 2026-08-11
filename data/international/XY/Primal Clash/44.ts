import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'es-es': "Milotic",
		'it-it': "Milotic",
		'pt-br': "Milotic",
		'de-de': "Milotic"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sparkling Ripples",
				'fr-fr': "Ondes Étincelantes",
				'es-es': "Ondas Centelleantes",
				'it-it': "Increspature Luccicanti",
				'pt-br': "Ondulações Cintilantes",
				'de-de': "Glitzernde Wellen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a card from your discard pile into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez ajouter une carte de votre pile de défausse à votre main.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes poner 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere una carta dalla tua pila degli scarti e aggiungerla a quelle che hai in mano.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode colocar um card de sua pilha de descarte em sua mão.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Karte von deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Swirl",
				'fr-fr': "Tourbillon Aquatique",
				'es-es': "Remolino Acuático",
				'it-it': "Idroturbine",
				'pt-br': "Turbilhão de Água",
				'de-de': "Aquastrudel"
			},
			effect: {
				'en-us': "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Você poderá fazer com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is the world's most beautiful Pokémon. There are many works of art featuring Milotic.",
	},

	thirdParty: {
		cardmarket: 273575,
		tcgplayer: 95941
	}
}

export default card
