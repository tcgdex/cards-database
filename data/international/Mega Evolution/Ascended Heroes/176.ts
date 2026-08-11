import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'es-mx': "Drampa",
		'de-de': "Sen-Long",
		'it-it': "Drampa",
		'pt-br': "Drampa"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [780],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'es-mx': "Cachetadita",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dragon Strike",
			'fr-fr': "Frappe du Dragon",
			'es-es': "Golpe Dragón",
			'es-mx': "Golpe Dracónico",
			'de-de': "Drachenhieb",
			'it-it': "Dragocolpo",
			'pt-br': "Ataque de Dragão"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Dragon Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe du Dragon.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Dragón.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Dracónico.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Drachenhieb nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Dragocolpo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque de Dragão."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "It has a compassionate personality, but if it is angered, it completely destroys its surroundings with its intense breath.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869787,
			tcgplayer: 675988
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870410,
			tcgplayer: 676989
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870409,
			tcgplayer: 677129
		}
	},
],
}

export default card
