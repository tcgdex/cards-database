import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [963],
	set: Set,

	name: {
		'en-us': "Finizen",
		'fr-fr': "Dofin",
		'es-es': "Finizen",
		'it-it': "Finizen",
		'pt-br': "Finizen",
		'de-de': "Normifin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Aqua Slash",
			'fr-fr': "Aqua Slash",
			'es-es': "Cuchillada Acuática",
			'it-it': "Idrosquarcio",
			'pt-br': "Aqua Corte",
			'de-de': "Aquaschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Its water ring is made from seawater mixed with a sticky fluid that Finizen secretes from its blowhole.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769233,
				tcgplayer: 550103
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769233,
				tcgplayer: 550103
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 775950,
			}
		},
	],

	illustrator: "Narumi Sato",

}

export default card