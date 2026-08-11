import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur.",
	},

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'es-mx': "Vulpix",
		'de-de': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix"
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'es-es': "Quemadura",
			'es-mx': "Quemadura",
			'de-de': "Versengung",
			'it-it': "Scottata",
			'pt-br': "Chamuscada"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886400,
				tcgplayer: 693558
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886400,
				tcgplayer: 693558
			}
		},
	],
}

export default card
