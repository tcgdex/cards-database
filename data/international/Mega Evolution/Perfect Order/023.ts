import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [698],

	name: {
		'en-us': "Amaura",
		'fr-fr': "Amagara",
		'es-es': "Amaura",
		'es-mx': "Amaura",
		'de-de': "Amarino",
		'it-it': "Amaura",
		'pt-br': "Amaura"
	},

	evolveFrom: {
		'en-us': "Antique Sail Fossil",
		'fr-fr': "Fossile Nageoire Ancien",
		'es-es': "Fósil Aleta Antiguo",
		'es-mx': "Fósil Aleta Antiguo",
		'de-de': "Antikes Flossenfossil",
		'it-it': "Vecchio Fossilpinna",
		'pt-br': "Fóssil de Vela Arcaico",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icy Wind",
			'fr-fr': "Vent Glace",
			'es-es': "Viento Hielo",
			'es-mx': "Viento Helado",
			'de-de': "Eissturm",
			'it-it': "Ventogelato",
			'pt-br': "Vento Congelante"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684355,
				cardmarket: 877435
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684355,
				cardmarket: 877435
			}
		}
	],

}

export default card
