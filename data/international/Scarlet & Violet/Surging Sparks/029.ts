import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Heat Burn",
			'fr-fr': "Chaleur Brûlante",
			'es-es': "Quemazón",
			'it-it': "Brucia Calore",
			'pt-br': "Queimadura por Calor",
			'de-de': "Brandwunde"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794946,
				tcgplayer: 589952
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794946,
				tcgplayer: 589952
			}
		},
		{
			type: "normal",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 794286,
			}
		},
	],

	illustrator: "Tomomi Ozaki",
	
}

export default card
