import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [936],
	set: Set,

	name: {
		'en-us': "Armarouge",
		'fr-fr': "Carmadura",
		'es-es': "Armarouge",
		'it-it': "Armarouge",
		'pt-br': "Armarouge",
		'de-de': "Crimanzo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fire Off",
			'fr-fr': "Feu Projeté",
			'es-es': "Pirodisparo",
			'it-it': "Raffica Ignea",
			'pt-br': "Disparada de Fogo",
			'de-de': "Abfeuern"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move a {R} Energy from 1 of your Benched Pokémon to your Active Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie {R} de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 Energía {R} de uno de tus Pokémon en Banca a tu Pokémon Activo.",
			'it-it': "Durante il tuo turno, puoi spostare un'Energia {R} da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover uma Energia {R} de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 {R}-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flame Cannon",
			'fr-fr': "Canon Flamme",
			'es-es': "Cañón Llama",
			'it-it': "Fiammacannone",
			'pt-br': "Canhão de Chamas",
			'de-de': "Flammenkanone"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751654,
				tcgplayer: 534497,
				cardtrader: 274299
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	description: {
		'en-us': "Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal.",
	},

}

export default card
