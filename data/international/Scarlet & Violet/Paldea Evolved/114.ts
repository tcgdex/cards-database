import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [453],
	set: Set,

	name: {
		'fr-fr': "Cradopaud",
		'en-us': "Croagunk",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Dard-Venin",
			'en-us': "Poison Sting",
			'es-es': "Picotazo Veneno",
			'it-it': "Velenospina",
			'pt-br': "Ferrão Venenoso",
			'de-de': "Giftstachel"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715589,
				tcgplayer: 497529,
				cardtrader: 248760
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715589,
				tcgplayer: 497529,
				cardtrader: 248760
			}
		},
	],

	illustrator: "kawayoo",

	description: {
		'en-us': "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
	},
}

export default card
