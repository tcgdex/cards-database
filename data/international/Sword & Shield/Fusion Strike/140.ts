import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [207],
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "It flies straight at its target's face, then clamps down on the startled victim to inject poison."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin",
			'de-de': "Giftstachel",
			'es-es': "Picotazo Veneno",
			'pt-br': "Ferrão Venenoso",
			'it-it': "Velenospina"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'de-de': "Durchbohren",
			'es-es': "Perforar",
			'pt-br': "Perfurar",
			'it-it': "Perforare"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582752,
				tcgplayer: 253348
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582752,
				tcgplayer: 253348
			}
		},
	],
}

export default card
