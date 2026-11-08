import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Super Poison Breath",
			'fr-fr': "Super Haleine Empoisonnée",
			'es-es': "Aliento Supervenenoso",
			'it-it': "Super Velenospiro",
			'pt-br': "Super-hálito Venenoso",
			'de-de': "Super-Gifthauch"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Kouki Saitou",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	description: {
		'en-us': "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
	},

	thirdParty: {
        cardmarket: 702421,
        tcgplayer: 487055
    }
}

export default card