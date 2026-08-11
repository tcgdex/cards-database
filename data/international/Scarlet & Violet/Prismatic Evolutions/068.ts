import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'pt-br': "Heatran",
		'it-it': "Heatran",
		'de-de': "Heatran"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Wrack Down",
			'fr-fr': "Réduire en Poussière",
			'es-es': "Desmoronar",
			'pt-br': "Desmoronar",
			'it-it': "Abbattere",
			'de-de': "Niederschleudern"
		},

		damage: 40
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Buster",
			'fr-fr': "Buster de Fer",
			'es-es': "Destructor Férreo",
			'pt-br': "Destruidor Férreo",
			'it-it': "Ferro Distruttivo",
			'de-de': "Eisensprenger"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130
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
	retreat: 3,
	regulationMark: "H",
	illustrator: "Tonji Matsuno",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805457,
				tcgplayer: 610423
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805457,
				tcgplayer: 610423
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806504,
				tcgplayer: 610585
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806505,
				tcgplayer: 610686
			}
		},
	],
}

export default card
