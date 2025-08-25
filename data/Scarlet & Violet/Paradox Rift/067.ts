import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pep Up",
			fr: "Coup de Peps",
			es: "Animar",
			it: "Animare",
			pt: "Torcida",
			de: "Beflügeln"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent's).",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre uma carta para cada Pokémon no Banco (seus e do seu oponente).",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jedes Pokémon auf der Bank (deiner und der deines Gegners)."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Volt Wave",
			fr: "Vague Survoltée",
			es: "Onda Electrificante",
			it: "Onda Volt",
			pt: "Onda de Volts",
			de: "Voltwelle"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Saya Tsuruta",

	thirdParty: {
		cardmarket: 740558
	}
}

export default card