import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		'fr-fr': "Fulgulairo",
		'en-us': "Kilowattrel",
		'es-es': "Kilowattrel",
		'it-it': "Kilowattrel",
		'pt-br': "Kilowattrel",
		'de-de': "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Zapétrel",
		'en-us': "Wattrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},
	stage: "Stage1",

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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Aile Jet",
			'en-us': "Jet Wing",
			'es-es': "Ala Propulsión",
			'it-it': "Ala Jet",
			'pt-br': "Asa a Jato",
			'de-de': "Jet-Flügel"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 150
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
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715557,
				tcgplayer: 497493,
				cardtrader: 248709
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715557,
				tcgplayer: 497493,
				cardtrader: 248709
			}
		},
	],

	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "Kilowattrel inflates its throat sac to amplify its electricity. By riding the wind, this Pokémon can fly over 430 miles in a day.",
	},
}

export default card
