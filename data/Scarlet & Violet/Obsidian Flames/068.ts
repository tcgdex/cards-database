import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [603],
	set: Set,

	name: {
		fr: "Lampéroie",
		en: "Eelektrik",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		fr: "Anchwatt",
		en: "Tynamo",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Vague Survoltée",
			en: "Volt Wave",
			es: "Onda Electrificante",
			it: "Onda Volt",
			pt: "Onda de Volts",
			de: "Voltwelle"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Boule de Foudre",
			en: "Electric Ball",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 725148
	}
}

export default card