import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [889],
	set: Set,

	name: {
		'en-us': "Zamazenta VSTAR",
		'fr-fr': "Zamazenta VSTAR",
		'es-es': "Zamazenta V-ASTRO",
		'it-it': "Zamazenta V ASTRO",
		'pt-br': "Zamazenta V-ASTRO",
		'de-de': "Zamazenta VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Zamazenta V",
		'fr-fr': "Zamazenta-V",
		'es-es': "Zamazenta V",
		'it-it': "Zamazenta-V",
		'pt-br': "Zamazenta V",
		'de-de': "Zamazenta-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'de-de': "Gigastoß"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
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
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691818,
				tcgplayer: 477470
			}
		},
	],
}

export default card
