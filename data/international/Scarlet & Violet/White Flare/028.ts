import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [583],
	set: Set,

	name: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'de-de': "Gelatroppo",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'es-es': "Vanillish",
		'es-mx': "Vanillish"
	},

	illustrator: "cochi8i",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'de-de': "Gelatini",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'es-es': "Vanillite",
		'es-mx': "Vanillite"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'es-es': "Apisonar",
			'es-mx': "Colisión"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Ice Beam",
			'fr-fr': "Laser Glace",
			'de-de': "Eisstrahl",
			'it-it': "Geloraggio",
			'pt-br': "Raio Congelante",
			'es-es': "Rayo Hielo",
			'es-mx': "Rayo de Hielo"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835958,
				tcgplayer: 642140
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835958,
				tcgplayer: 642140
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836543,
				tcgplayer: 642384
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836544,
				tcgplayer: 642312
			}
		},
	],
}

export default card
