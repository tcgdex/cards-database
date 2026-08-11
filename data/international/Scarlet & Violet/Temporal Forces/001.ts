import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cut Up",
			'fr-fr': "Découpage",
			'es-es': "Trocear",
			'it-it': "Tagliuzzamento",
			'pt-br': "Dilacerar",
			'de-de': "Zerhäckseln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

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

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760631,
				tcgplayer: 542646
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760631,
				tcgplayer: 542646
			}
		},
	],

	illustrator: "Dsuke",

}

export default card