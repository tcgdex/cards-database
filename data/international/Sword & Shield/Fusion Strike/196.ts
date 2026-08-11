import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [705],
	set: Set,

	name: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
		'es-es': "Sliggoo",
		'it-it': "Sliggoo",
		'pt-br': "Sliggoo",
		'de-de': "Viscargot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "The lump on its back contains its tiny brain. It thinks only of food and escaping its enemies."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Melt",
			'fr-fr': "Dissolution",
			'de-de': "Schmelzen",
			'es-es': "Derretir",
			'pt-br': "Derreter",
			'it-it': "Liquefazione"
		},

		damage: 20
	}, {
		cost: ["Water", "Psychic"],

		name: {
			'en-us': "Body Slam",
			'fr-fr': "Plaquage",
			'de-de': "Bodyslam",
			'es-es': "Golpe Cuerpo",
			'pt-br': "Pancada Corporal",
			'it-it': "Corposcontro"
		},

		damage: 50,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582870,
				tcgplayer: 253354
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582870,
				tcgplayer: 253354
			}
		},
	],
}

export default card
