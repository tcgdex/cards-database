import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [543],
	set: Set,

	name: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'de-de': "Toxiped",
		'it-it': "Venipede",
		'pt-br': "Venipede",
		'es-es': "Venipede",
		'es-mx': "Venipede"
	},

	illustrator: "okayamatakatoshi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Poison Spray",
			'fr-fr': "Pulvérisation Toxique",
			'de-de': "Giftspray",
			'it-it': "Spruzzo Velenoso",
			'pt-br': "Spray de Veneno",
			'es-es': "Aerosol Venenoso",
			'es-mx': "Aerosol Venenoso"
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

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836017,
				tcgplayer: 642506
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836017,
				tcgplayer: 642506
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836392,
				tcgplayer: 642748
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836391,
				tcgplayer: 642675
			}
		}
	]
}

export default card
