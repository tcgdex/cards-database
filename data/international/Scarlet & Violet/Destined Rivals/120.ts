import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		'en-us': "Team Rocket's Zubat",
		'fr-fr': "Nosferapti de la Team Rocket",
		'de-de': "Team Rockets Zubat",
		'it-it': "Zubat del Team Rocket",
		'es-es': "Zubat del Team Rocket",
		'pt-br': "Zubat da Equipe Rocket",
		'es-mx': "Zubat del Equipo Rocket"
	},


	illustrator: "toi8",

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Spray",
			'fr-fr': "Pulvérisation Toxique",
			'de-de': "Giftspray",
			'it-it': "Spruzzo Velenoso",
			'es-es': "Aerosol Venenoso",
			'pt-br': "Spray de Veneno",
			'es-mx': "Aerosol Venenoso"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825994,
				tcgplayer: 632928
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825994,
				tcgplayer: 632928
			}
		},
	],
}

export default card
