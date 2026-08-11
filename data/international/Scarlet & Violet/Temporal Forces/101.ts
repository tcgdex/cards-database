import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [24],
	set: Set,

	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok",
		'es-es': "Arbok",
		'it-it': "Arbok",
		'pt-br': "Arbok",
		'de-de': "Arbok"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Panic Poison",
			'fr-fr': "Poison Panique",
			'es-es': "Pánico Venenoso",
			'it-it': "Velenostress",
			'pt-br': "Veneno do Pânico",
			'de-de': "Panikgift"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760731,
				tcgplayer: 542845
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760731,
				tcgplayer: 542845
			}
		},
	],

	illustrator: "Minato",

}

export default card