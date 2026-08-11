import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		'en-us': "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Return",
			'fr-fr': "Retour",
			'de-de': "Rückkehr",
			'es-es': "Retribución",
			'pt-br': "Retorno",
			'it-it': "Ritorno"
		},

		damage: 30,

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'de-de': "Du kannst so viele Karten ziehen, bis du 6 Karten auf der Hand hast.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Whip Smash",
			'fr-fr': "Frappe Fouet",
			'de-de': "Peitschenschlag",
			'es-es': "Golpe Látigo",
			'pt-br': "Chicote Esmagador",
			'it-it': "Frustata Devastante"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582036,
				tcgplayer: 253078
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582036,
				tcgplayer: 253078
			}
		},
	],
}

export default card
