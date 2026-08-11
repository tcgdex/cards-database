import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [224],
	set: Set,

	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'es-es': "Octillery",
		'de-de': "Octillery",
		'it-it': "Octillery",
		'pt-br': "Octillery",
		'es-mx': "Octillery"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'de-de': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'es-mx': "Remoraid"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Aqua Wash",
			'fr-fr': "Aqua-Lavage",
			'es-es': "Limpieza Acuática",
			'de-de': "Aquawäsche",
			'it-it': "Idrolavaggio",
			'pt-br': "Limpeza Aquática",
			'es-mx': "Acualavado"
		},

		effect: {
			'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben.",
			'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			'pt-br': "Você pode colocar uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele.",
			'es-mx': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Octo Beatdown",
			'fr-fr': "Octo-Dérouillée",
			'es-es': "Octogolpe",
			'de-de': "Octoprügel",
			'it-it': "Polpobatosta",
			'pt-br': "Soco Tentacular",
			'es-mx': "Octopaliza"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 90 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Toshinao Aoki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817186,
				tcgplayer: 623461
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817186,
				tcgplayer: 623461
			}
		},
	],
}

export default card
