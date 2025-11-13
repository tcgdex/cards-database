import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [496],
	set: Set,

	name: {
		en: "Servine",
		fr: "Lianaja",
		de: "Efoserp",
		it: "Servine",
		pt: "Servine",
		es: "Servine",
		'es-mx': "Servine"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy",
		es: "Snivy",
		"es-mx": "Snivy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Wrap",
			fr: "Ligotage",
			de: "Wickel",
			it: "Avvolgibotta",
			pt: "Embrulho",
			es: "Constricción",
			'es-mx': "Constricción"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			de: "Rankenhieb",
			it: "Frustata",
			pt: "Chicote de Vinha",
			es: "Látigo Cepa",
			'es-mx': "Látigo Cepa"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836085
	}
}

export default card