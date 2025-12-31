import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [294],
	set: Set,

	name: {
		en: "Loudred",
		fr: "Ramboum",
		es: "Loudred",
		it: "Loudred",
		pt: "Loudred",
		de: "Krakeelo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			pt: "Pancada Corporal",
			de: "Bodyslam"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mega Impact",
			fr: "Méga Impact",
			es: "Megaimpacto",
			it: "Mega Impatto",
			pt: "Mega-impacto",
			de: "Mega-Einschlag"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "NC Empire",

	thirdParty: {
		cardmarket: 740689
	}
}

export default card