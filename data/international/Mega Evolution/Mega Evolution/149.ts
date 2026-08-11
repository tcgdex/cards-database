import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'de-de': "Sproxi",
		'it-it': "Shroodle",
		'es-es': "Shroodle",
		'pt-br': "Shroodle",
		'es-mx': "Shroodle"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [944],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Poison Jab",
			'fr-fr': "Direct Toxik",
			'de-de': "Gifthieb",
			'it-it': "Velenpuntura",
			'es-es': "Puya Nociva",
			'pt-br': "Golpe Envenenado",
			'es-mx': "Golpe Venenoso"
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

		damage: 20
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
			type: "holo",
			thirdParty: {
				cardmarket: 851220,
				tcgplayer: 654488
			}
		},
	],
}

export default card
