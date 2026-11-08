import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [693],
	set: Set,

	name: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
		'es-es': "Clawitzer",
		'it-it': "Clawitzer",
		'pt-br': "Clawitzer",
		'de-de': "Wummer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Aqua Cannon",
			'fr-fr': "Aqua-Canon",
			'es-es': "Cañón Aqua",
			'it-it': "Cannone Acquatico",
			'pt-br': "Aqua Canhão",
			'de-de': "Wasserkanone"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "The cannonballs of seawater that Clawitzer launches from its claw are powerful enough to punch through tanker hulls.",
	},

	thirdParty: {
        cardmarket: 702345,
        tcgplayer: 487897
    }
}

export default card