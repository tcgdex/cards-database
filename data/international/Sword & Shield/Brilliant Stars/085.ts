import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'es-es': "Muk",
		'it-it': "Muk",
		'pt-br': "Muk",
		'de-de': "Sleimok"
	},

	illustrator: "Scav",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sludge Street",
			'fr-fr': "Passage Dégueu",
			'es-es': "Calle Lodo",
			'it-it': "Strada di Melma",
			'pt-br': "Lodo na Rua",
			'de-de': "Schlammstraße"
		},

		effect: {
			'en-us': "The Retreat Cost of your opponent's Poisoned Pokémon is Colorless more.",
			'fr-fr': "Le Coût de Retraite des Pokémon Empoisonnés de votre adversaire augmente de Colorless.",
			'es-es': "El Coste de Retirada de los Pokémon Envenenados de tu rival es de Colorless más.",
			'it-it': "Il costo di ritirata dei Pokémon avvelenati del tuo avversario aumenta di Colorless.",
			'pt-br': "O custo de Recuo dos Pokémon Envenenados do seu oponente é Colorless a mais.",
			'de-de': "Die Rückzugskosten der vergifteten Pokémon deines Gegners erhöhen sich um Colorless."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Shrieking Poison",
			'fr-fr': "Poison Hurleur",
			'es-es': "Veneno Chillón",
			'it-it': "Velenostrido",
			'pt-br': "Veneno Gritante",
			'de-de': "Kreischendes Gift"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Because they scatter germs everywhere, they've long been targeted for extermination, leading to a steep decline in their population.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608535,
				tcgplayer: 263801
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608535,
				tcgplayer: 263801
			}
		},
	],
}

export default card
