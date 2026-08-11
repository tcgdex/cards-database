import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Hot Magma",
			'fr-fr': "Magma Ardent",
			'es-es': "Magma Caliente",
			'it-it': "Magma Bollente",
			'pt-br': "Magma Cálido",
			'de-de': "Heißes Magma"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "It's said that in ancient times, when volcanoes were more active, there were many more Slugma than there are now.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769202,
				tcgplayer: 550072
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769202,
				tcgplayer: 550072
			}
		},
	],

	illustrator: "Gapao",

}

export default card