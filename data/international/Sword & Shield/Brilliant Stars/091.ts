import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Trade",
			'fr-fr': "Troc",
			'es-es': "Intercambiar",
			'it-it': "Contraccambio",
			'pt-br': "Troca",
			'de-de': "Ersetzen"
		},

		effect: {
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
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
		'en-us': "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608637,
				tcgplayer: 263809
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608637,
				tcgplayer: 263809
			}
		},
	],
}

export default card
