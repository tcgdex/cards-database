import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [315],
	set: Set,

	name: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Soothing Scent",
			'fr-fr': "Senteur Apaisante",
			'es-es': "Aroma Sedante",
			'it-it': "Aroma Calmante",
			'pt-br': "Odor Calmante",
			'de-de': "Beruhigender Duft"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674025,
				tcgplayer: 283881
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674025,
				tcgplayer: 283881
			}
		},
	],
}

export default card
