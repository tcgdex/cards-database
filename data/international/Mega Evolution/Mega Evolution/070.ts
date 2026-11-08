import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix",
		'it-it': "Onix",
		'es-es': "Onix",
		'pt-br': "Onix",
		'es-mx': "Onix"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [95],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bind",
			'fr-fr': "Étreinte",
			'de-de': "Klammergriff",
			'it-it': "Legatutto",
			'es-es': "Atadura",
			'pt-br': "Ligação",
			'es-mx': "Atadura"
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
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'de-de': "Stärke",
			'it-it': "Forza",
			'es-es': "Fuerza",
			'pt-br': "Força",
			'es-mx': "Fuerza"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851141,
				tcgplayer: 654409
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851141,
				tcgplayer: 654409
			}
		},
	],
}

export default card
