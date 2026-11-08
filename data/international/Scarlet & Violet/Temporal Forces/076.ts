import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [743],
	set: Set,

	name: {
		'en-us': "Ribombee",
		'fr-fr': "Rubombelle",
		'es-es': "Ribombee",
		'it-it': "Ribombee",
		'pt-br': "Ribombee",
		'de-de': "Bandelby"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
		'es-es': "Cutiefly",
		'it-it': "Cutiefly",
		'pt-br': "Cutiefly",
		'de-de': "Wommel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Plentiful Pollen",
			'fr-fr': "Pollen Abondant",
			'es-es': "Polen Copioso",
			'it-it': "Polline a Volontà",
			'pt-br': "Abundância de Pólen",
			'de-de': "Pollenreichtum"
		},

		effect: {
			'en-us': "During your next turn, if the Defending Pokémon is Knocked Out, take 2 more Prize cards.",
			'fr-fr': "Pendant votre prochain tour, si le Pokémon Défenseur est mis K.O., récupérez 2 cartes Récompense supplémentaires.",
			'es-es': "Durante tu próximo turno, si el Pokémon Defensor queda Fuera de Combate, coge 2 cartas de Premio más.",
			'it-it': "Durante il tuo prossimo turno, se il Pokémon difensore viene messo KO, prendi due carte Premio in più.",
			'pt-br': "Durante o seu próximo turno, se o Pokémon Defensor for Nocauteado, pegue 2 cartas de Prêmio a mais.",
			'de-de': "Wenn das Verteidigende Pokémon während deines nächsten Zuges kampfunfähig wird, nimm 2 Preiskarten mehr."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "It makes pollen puffs from pollen and nectar. The puffs' effects depend on the type of ingredients and how much of each one is used.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760706,
				tcgplayer: 542820
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760706,
				tcgplayer: 542820
			}
		},
	],

	illustrator: "Tika Matsuno",

}

export default card