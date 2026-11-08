import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [148],
	set: Set,

	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wrap",
			'fr-fr': "Ligotage",
			'es-es': "Constricción",
			'it-it': "Avvolgibotta",
			'pt-br': "Embrulho",
			'de-de': "Wickel"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'de-de': "Surfer"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682177,
				tcgplayer: 451783
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682177,
				tcgplayer: 451783
			}
		},
	],
}

export default card
