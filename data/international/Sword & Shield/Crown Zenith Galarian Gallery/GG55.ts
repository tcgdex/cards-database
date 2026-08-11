import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		'en-us': "Regigigas VSTAR",
		'fr-fr': "Regigigas VSTAR",
		'es-es': "Regigigas V-ASTRO",
		'it-it': "Regigigas V ASTRO",
		'pt-br': "Regigigas V-ASTRO",
		'de-de': "Regigigas VSTAR"
	},

	illustrator: "Aya Kusube",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Regigigas V",
		'fr-fr': "Regigigas-V",
		'es-es': "Regigigas V",
		'it-it': "Regigigas-V",
		'pt-br': "Regigigas V",
		'de-de': "Regigigas-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

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

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691935,
				tcgplayer: 478083
			}
		},
	],
}

export default card
