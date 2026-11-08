import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [590],
	set: Set,

	name: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'de-de': "Tarnpignon",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'es-es': "Foongus",
		'es-mx': "Foongus"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Toxic Spore",
			'fr-fr': "Spore Toxik",
			'de-de': "Toxische Sporen",
			'it-it': "Spora Tossica",
			'pt-br': "Esporo Tóxico",
			'es-es': "Espora Tóxica",
			'es-mx': "Esporas Tóxicas"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		}
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835921,
				tcgplayer: 642459
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835921,
				tcgplayer: 642459
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836267,
				tcgplayer: 642704
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836268,
				tcgplayer: 642632
			}
		}
	],
}

export default card
