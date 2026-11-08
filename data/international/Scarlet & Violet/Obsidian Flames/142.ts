import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		'fr-fr': "Airmure",
		'en-us': "Skarmory",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Picpic",
			'en-us': "Peck",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Acier Déchirant",
			'en-us': "Slashing Steel",
			'es-es': "Acero Cortante",
			'it-it': "Acciaio Lacerante",
			'pt-br': "Aço Cortante",
			'de-de': "Schlitzender Stahl"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Acier Déchirant.",
			'en-us': "During your next turn, this Pokémon can't use Slashing Steel.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Acero Cortante.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Acciaio Lacerante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Aço Cortante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Stahl nicht einsetzen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "People fashion swords from Skarmory's shed feathers, so this Pokémon is a popular element in heraldic designs.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725222,
				tcgplayer: 509920,
				cardtrader: 255827
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725222,
				tcgplayer: 509920,
				cardtrader: 255827
			}
		},
	],

	illustrator: "Takeshi Nakamura",

	
}

export default card
