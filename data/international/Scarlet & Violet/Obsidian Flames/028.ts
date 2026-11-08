import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'fr-fr': "Goupix",
		'en-us': "Vulpix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Fournaise",
			'en-us': "Combustion",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Onde Folie",
			'en-us': "Confuse Ray",
			'es-es': "Rayo Confuso",
			'it-it': "Stordiraggio",
			'pt-br': "Raio da Confusão",
			'de-de': "Konfusstrahl"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725108,
				tcgplayer: 509717,
				cardtrader: 255588
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725108,
				tcgplayer: 509717,
				cardtrader: 255588
			}
		},
	],

	illustrator: "0313",

	
}

export default card
