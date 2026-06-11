import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Its fluffy coat doubles in size when static electricity builds up. Touching it can be shocking.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886419,
				tcgplayer: 693507
			}
		},
	],

	name: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		'es-mx': "Mareep",
		de: "Voltilamm",
		it: "Mareep",
		pt: "Mareep"
	},

	illustrator: "UKUMO uiti",
	rarity: "Common",
	category: "Pokemon",
	dexId: [179],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Wave",
			fr: "Cage Éclair",
			es: "Onda Trueno",
			'es-mx': "Onda Trueno",
			de: "Donnerwelle",
			it: "Tuononda",
			pt: "Onda de Trovão"
		},

		cost: ["Lightning", "Colorless"],
		damage: 20,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card