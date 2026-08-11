import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [113],
	set: Set,

	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lucky Attachment",
			'fr-fr': "Attache Chanceuse",
			'es-es': "Unión Afortunada",
			'it-it': "Assegnazione Fortunata",
			'pt-br': "Ligação Sortuda",
			'de-de': "Glücksanlage"
		},

		effect: {
			'en-us': "Attach a Basic Energy card from your hand to 1 of your Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre main à l'un de vos Pokémon.",
			'es-es': "Une 1 carta de Energía Básica de tu mano a uno de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia base dalla tua mano.",
			'pt-br': "Ligue uma carta de Energia Básica da sua mão a 1 dos seus Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Boundless Power",
			'fr-fr': "Puissance Illimitée",
			'es-es': "Poder Ilimitado",
			'it-it': "Potere Incontenibile",
			'pt-br': "Poder Ilimitado",
			'de-de': "Unbegrenzte Kraft"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It walks carefully to prevent its egg from breaking. However, it is extremely fast at running away.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769307,
				tcgplayer: 550177
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769307,
				tcgplayer: 550177
			}
		},
	],

	illustrator: "HYOGONOSUKE",

}

export default card