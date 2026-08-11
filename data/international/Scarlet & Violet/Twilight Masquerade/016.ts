import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'en-us': "Rillaboom",
		'fr-fr': "Gorythmic",
		'es-es': "Rillaboom",
		'it-it': "Rillaboom",
		'pt-br': "Rillaboom",
		'de-de': "Gortrom"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Drum Beating",
			'fr-fr': "Tambour Battant",
			'es-es': "Batería Asalto",
			'it-it': "Tamburattacco",
			'pt-br': "Toque do Tambor",
			'de-de': "Trommelschläge"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon cost {C} more, and its Retreat Cost is {C} more.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent {C} de plus et son Coût de Retraite est augmenté de {C}.",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan {C} más, y su Coste de Retirada es de {C} más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di {C} e il suo costo di ritirata aumenta di {C}.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C} a mais e o seu custo de Recuo será {C} a mais.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um {C}, und seine Rückzugskosten erhöhen sich um {C}."
		},

		damage: 60
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Wood Hammer",
			'fr-fr': "Martobois",
			'es-es': "Mazazo",
			'it-it': "Mazzuolegno",
			'pt-br': "Martelo de Madeira",
			'de-de': "Holzhammer"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769190,
				tcgplayer: 550060
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769190,
				tcgplayer: 550060
			}
		},
	],

	illustrator: "toriyufu",

}

export default card