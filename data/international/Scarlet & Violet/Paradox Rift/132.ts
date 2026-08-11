import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [680],
	set: Set,

	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Slashing Strike",
			'fr-fr': "Coup Déchirant",
			'es-es': "Golpe Cuchillazo",
			'it-it': "Lacerattacco",
			'pt-br': "Ataque Cortante",
			'de-de': "Schlitzender Schlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Slashing Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
		},

		damage: 80
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
	regulationMark: "G",

	description: {
		'en-us': "The two swords employ a strategy of rapidly alternating between offense and defense to bring down their prey.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740670,
				tcgplayer: 523809,
				cardtrader: 265232
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 784940
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740670,
				tcgplayer: 523809,
				cardtrader: 265232
			}
		},
	],

	illustrator: "Bun Toujo",

	
}

export default card
