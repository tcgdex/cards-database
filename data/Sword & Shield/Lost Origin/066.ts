import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Netherworld Gate",
			fr: "Porte de l'Au-delà",
			es: "Portal al Otro Mundo",
			it: "Portale Oltretomba",
			pt: "Portão do Mundo Inferior",
			de: "Portal zum Schattenreich"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 3 damage counters on this Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez 3 marqueurs de dégâts sur ce Pokémon.",
			es: "Una vez durante tu turno, si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Si lo haces, pon 3 contadores de daño en este Pokémon.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua pila degli scarti, puoi metterlo nella tua panchina. Se lo fai, metti tre segnalini danno su questo Pokémon.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Se fizer isto, coloque 3 contadores de dano neste Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in deinem Ablagestapel ist, kannst du es auf deine Bank legen. Wenn du das machst, lege 3 Schadensmarken auf dieses Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Screaming Circle",
			fr: "Cercle Hurlant",
			es: "Círculo de Gritos",
			it: "Cerchio Urlante",
			pt: "Roda da Gritaria",
			de: "Kreischender Kreis"
		},

		effect: {
			en: "Put 2 damage counters on your opponent's Active Pokémon for each of your opponent's Benched Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon de Banc de votre adversaire.",
			es: "Pon 2 contadores de daño en el Pokémon Activo de tu rival por cada uno de los Pokémon en Banca de tu rival.",
			it: "Metti due segnalini danno sul Pokémon attivo del tuo avversario per ogni suo Pokémon in panchina.",
			pt: "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente para cada Pokémon no Banco do seu oponente.",
			de: "Lege für jedes Pokémon auf der Bank deines Gegners 2 Schadensmarken auf das Aktive Pokémon deines Gegners."
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674075
	}
}

export default card
