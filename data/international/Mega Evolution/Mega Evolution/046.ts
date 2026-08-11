import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'de-de': "Magneton",
		'it-it': "Magneton",
		'es-es': "Magneton",
		'pt-br': "Magneton",
		'es-mx': "Magneton"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'de-de': "Magnetilo",
		'it-it': "Magnemite",
		'es-es': "Magnemite",
		'pt-br': "Magnemite",
		'es-mx': "Magnemite"
	},
	stage: "Stage1",
	dexId: [82],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'de-de': "Donnerschock",
			'it-it': "Tuonoshock",
			'es-es': "Impactrueno",
			'pt-br': "Trovoada de Choques",
			'es-mx': "Impactrueno"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851117,
				tcgplayer: 654385
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851117,
				tcgplayer: 654385
			}
		},
	],
}

export default card
