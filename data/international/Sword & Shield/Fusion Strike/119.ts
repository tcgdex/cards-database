import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'es-es': "Mawile",
		'it-it': "Mawile",
		'pt-br': "Mawile",
		'de-de': "Flunkifer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Chomp Chomp Hold",
			'fr-fr': "Mangeouille Acharnée",
			'de-de': "Mampfgriff",
			'es-es': "Obstrucción Ñam Ñam",
			'pt-br': "Imobilização Nhoc Nhoc",
			'it-it': "Stretta Mastica Bene"
		},

		damage: 30,

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks cost {C} more, and its Retreat Cost is {C} more.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent {C} de plus et son Coût de Retraite augmente de {C}.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um {C}, und seine Rückzugskosten erhöhen sich um {C}.",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan {C} más, y su Coste de Retirada es de {C} más.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor custarão {C} a mais e o seu custo de Recuo será {C} a mais.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi del Pokémon difensore aumenta di {C} e il suo costo di ritirata aumenta di {C}."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582635,
				tcgplayer: 253290
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582635,
				tcgplayer: 253290
			}
		},
	],
}

export default card
