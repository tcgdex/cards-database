import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [976],
	set: Set,

	name: {
		'en-us': "Veluza",
		'fr-fr': "Délestin",
		'es-es': "Veluza",
		'it-it': "Veluza",
		'pt-br': "Veluza",
		'de-de': "Agiluza"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slim Screw",
			'fr-fr': "Vis Fine",
			'es-es': "Rosca Fina",
			'it-it': "Vite Snella",
			'pt-br': "Parafuso Esbelto",
			'de-de': "Schmale Schraube"
		},

		effect: {
			'en-us': "If you have no cards in your hand, this attack can be used for {W}.",
			'fr-fr': "Si vous n'avez aucune carte dans votre main, cette attaque peut être utilisée pour {W}.",
			'es-es': "Si no tienes ninguna carta en tu mano, este ataque se puede usar por {W}.",
			'it-it': "Se non hai carte in mano, il costo di questo attacco è {W}.",
			'pt-br': "Se você não tiver cartas na sua mão, este ataque poderá ser usado por {W}.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, kann diese Attacke für {W} eingesetzt werden."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751664,
				tcgplayer: 534516,
				cardtrader: 274309
			}
		},
	],

	illustrator: "Nelnal",

	description: {
		'en-us': "When Veluza discards unnecessary flesh, its mind becomes honed and its psychic power increases. The spare flesh has a mild but delicious flavor.",
	},

}

export default card
