import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [19],
	set: Set,

	name: {
		'en-us': "Team Rocket's Rattata",
		'fr-fr': "Rattata de la Team Rocket",
		'de-de': "Team Rockets Rattfratz",
		'it-it': "Rattata del Team Rocket",
		'es-es': "Rattata del Team Rocket",
		'pt-br': "Rattata da Equipe Rocket",
		'es-mx': "Rattata del Equipo Rocket"
	},


	illustrator: "Dsuke",

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dangerous Incisors",
			'fr-fr': "Incisives Dangereuses",
			'de-de': "Gefährliche Nagerei",
			'it-it': "Incisivi Pericolosi",
			'es-es': "Incisivos Peligrosos",
			'pt-br': "Incisivos Perigosos",
			'es-mx': "Incisivos Peligrosos"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826021,
				tcgplayer: 632953
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826021,
				tcgplayer: 632953
			}
		},
	],
}

export default card
