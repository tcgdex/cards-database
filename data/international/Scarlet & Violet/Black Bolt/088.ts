import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [496],
	set: Set,

	name: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'de-de': "Efoserp",
		'it-it': "Servine",
		'pt-br': "Servine",
		'es-es': "Servine",
		'es-mx': "Servine"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'de-de': "Serpifeu",
		'it-it': "Snivy",
		'pt-br': "Snivy",
		'es-es': "Snivy",
		'es-mx': "Snivy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Wrap",
			'fr-fr': "Ligotage",
			'de-de': "Wickel",
			'it-it': "Avvolgibotta",
			'pt-br': "Embrulho",
			'es-es': "Constricción",
			'es-mx': "Constricción"
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

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'de-de': "Rankenhieb",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'es-es': "Látigo Cepa",
			'es-mx': "Látigo Cepa"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836085,
				tcgplayer: 642537
			}
		},
	]
}

export default card
