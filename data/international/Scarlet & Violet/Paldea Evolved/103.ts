import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [958],
	set: Set,

	name: {
		'fr-fr': "Forgella",
		'en-us': "Tinkatuff",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'de-de': "Tafforgita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Forgerette",
		'en-us': "Tinkatink",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Poing Léger",
			'en-us': "Light Punch",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Puissance Illimitée",
			'en-us': "Boundless Power",
			'es-es': "Poder Ilimitado",
			'it-it': "Potere Incontenibile",
			'pt-br': "Poder Ilimitado",
			'de-de': "Unbegrenzte Kraft"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715578,
				tcgplayer: 497518,
				cardtrader: 248732
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715578,
				tcgplayer: 497518,
				cardtrader: 248732
			}
		},
	],

	illustrator: "Akira Komayama",

	description: {
		'en-us': "This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer.",
	},
}

export default card
