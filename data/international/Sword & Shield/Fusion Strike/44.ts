import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'en-us': "Cinderace V",
		'fr-fr': "Pyrobut V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'es-es': "Llama",
			'pt-br': "Chama",
			'it-it': "Fiammata"
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "All-Out Shot",
			'fr-fr': "Tir Extrême",
			'de-de': "Wuchtiger Schuss",
			'es-es': "Disparo Demoledor",
			'pt-br': "Disparo Demolidor",
			'it-it': "Colpo Tutto-per-Tutto"
		},

		damage: 210,

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582178,
				tcgplayer: 253168
			}
		},
	],
}

export default card
