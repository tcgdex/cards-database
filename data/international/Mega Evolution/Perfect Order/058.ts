import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [681],

	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'es-mx': "Aegislash",
		'de-de': "Durengard",
		'it-it': "Aegislash",
		'pt-br': "Aegislash"
	},

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'es-mx': "Doublade",
		'de-de': "Duokles",
		'it-it': "Doublade",
		'pt-br': "Doublade",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'es-mx': "Cuchillada",
			'de-de': "Schlitzer",
			'it-it': "Lacerazione",
			'pt-br': "Talho"
		},

		damage: 80
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Metal Slash",
			'fr-fr': "Tranche Métallique",
			'es-es': "Tajo Metálico",
			'es-mx': "Cuchillada Metálica",
			'de-de': "Metallschlitzer",
			'it-it': "Lacerametallo",
			'pt-br': "Talho de Metal"
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

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684381,
				cardmarket: 877474
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684381,
				cardmarket: 877474
			}
		}
	],

}

export default card
