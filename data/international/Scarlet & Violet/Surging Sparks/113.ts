import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [853],
	set: Set,

	name: {
		'en-us': "Grapploct",
		'fr-fr': "Krakos",
		'es-es': "Grapploct",
		'it-it': "Grapploct",
		'pt-br': "Grapploct",
		'de-de': "Kaocto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'es-es': "Cortar",
			'it-it': "Ceffone",
			'pt-br': "Trincar",
			'de-de': "Hacker"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Raging Tentacles",
			'fr-fr': "Tentacules Furieux",
			'es-es': "Tentáculos Iracundos",
			'it-it': "Tentacoli Furiosi",
			'pt-br': "Tentáculos Violentos",
			'de-de': "Wütende Tentakel"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack can be used for {F}.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque peut être utilisée pour {F}.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por {F}.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, il costo di questo attacco è {F}.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por {F}.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für {F} eingesetzt werden."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794447,
				tcgplayer: 589960
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794447,
				tcgplayer: 589960
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

}

export default card
