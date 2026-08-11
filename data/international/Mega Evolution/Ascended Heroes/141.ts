import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'es-mx': "Hoopa",
		'de-de': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [720],
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Filch",
			'fr-fr': "Maraudage",
			'es-es': "Birlar",
			'es-mx': "Hurtar",
			'de-de': "Mopsen",
			'it-it': "Furtarello",
			'pt-br': "Furtar"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Knuckle Impact",
			'fr-fr': "Coup d'Articulations",
			'es-es': "Impacto Nudillo",
			'es-mx': "Impacto de Puño",
			'de-de': "Knöchelprall",
			'it-it': "Impatto Nocche",
			'pt-br': "Impacto Ossudo"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "This troublemaker sends anything and everything to faraway places using its loop, which can warp space.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869752,
			tcgplayer: 675953
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870358,
			tcgplayer: 676963
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870357,
			tcgplayer: 677103
		}
	},
],
}

export default card
