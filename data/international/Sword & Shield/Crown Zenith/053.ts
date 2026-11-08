import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora V",
		'fr-fr': "Zeraora V",
		'es-es': "Zeraora V",
		'it-it': "Zeraora V",
		'pt-br': "Zeraora V",
		'de-de': "Zeraora V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunderous Bolt",
			'fr-fr': "Éclair du Tonnerre",
			'es-es': "Rayo Atronador",
			'it-it': "Fulmine Tonante",
			'pt-br': "Raio Estrondoso",
			'de-de': "Donnernder Einschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691770,
				tcgplayer: 478164
			}
		},
	],
}

export default card
