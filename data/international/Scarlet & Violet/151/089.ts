import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		'fr-fr': "Grotadmorv",
		'en-us': "Muk",
		'es-es': "Muk",
		'it-it': "Muk",
		'pt-br': "Muk",
		'de-de': "Sleimok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Tadmorv",
		'en-us': "Grimer",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Prison Poisseuse",
			'en-us': "Sticky Jail",
			'es-es': "Prisión Viscosa",
			'it-it': "Viscosbarre",
			'pt-br': "Prisão Pegajosa",
			'de-de': "Klebriges Gefängnis"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent {C} de plus et son Coût de Retraite est augmenté de {C}.",
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon cost {C} more, and its Retreat Cost is {C} more.",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan {C} más, y su Coste de Retirada es de {C} más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di {C} e il suo costo di ritirata aumenta di {C}.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C} a mais e o seu custo de Recuo será {C} a mais.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um {C}, und seine Rückzugskosten erhöhen sich um {C}."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Bombe Beurk",
			'en-us': "Sludge Bomb",
			'es-es': "Bomba Lodo",
			'it-it': "Fangobomba",
			'pt-br': "Bomba de Lodo",
			'de-de': "Matschbombe"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "It's thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733684,
				tcgplayer: 516658,
				cardtrader: 261196
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733684,
				tcgplayer: 516658,
				cardtrader: 261196
			}
		},
	],

	illustrator: "Nisota Niso",

	
}

export default card
