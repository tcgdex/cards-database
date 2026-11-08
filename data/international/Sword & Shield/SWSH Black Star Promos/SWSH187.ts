import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		'fr-fr': "Léopardus",
		'de-de': "Kleoparda",
		'es-es': "Liepard",
		'pt-br': "Liepard",
		'it-it': "Liepard",
		'en-us': "Liepard"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Chacripan",
		'de-de': "Felilou",
		'es-es': "Purrloin",
		'pt-br': "Purrloin",
		'it-it': "Purrloin",
		'en-us': "Purrloin"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Troc",
			'de-de': "Ersetzen",
			'es-es': "Intercambiar",
			'pt-br': "Troca",
			'it-it': "Contraccambio",
			'en-us': "Trade"
		},

		effect: {
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranche",
			'de-de': "Schlitzer",
			'es-es': "Cuchillada",
			'pt-br': "Talho",
			'it-it': "Lacerazione",
			'en-us': "Slash"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon."
	},

	thirdParty: {
		cardmarket: 606601
	}
}

export default card
