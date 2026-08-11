import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'fr-fr': "Ectoplasma",
		'de-de': "Gengar",
		'es-es': "Gengar",
		'pt-br': "Gengar",
		'it-it': "Gengar",
		'en-us': "Gengar"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Spectrum",
		'de-de': "Alpollo",
		'es-es': "Haunter",
		'pt-br': "Haunter",
		'it-it': "Haunter",
		'en-us': "Haunter"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Porte de l'Au-delà",
			'de-de': "Portal zum Schattenreich",
			'es-es': "Portal al Otro Mundo",
			'pt-br': "Portão do Mundo Inferior",
			'it-it': "Portale Oltretomba",
			'en-us': "Netherworld Gate"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez 3 marqueurs de dégâts sur ce Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in deinem Ablagestapel ist, kannst du es auf deine Bank legen. Wenn du das machst, lege 3 Schadensmarken auf dieses Pokémon.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Si lo haces, pon 3 contadores de daño en este Pokémon.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Se fizer isto, coloque 3 contadores de dano neste Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua pila degli scarti, puoi metterlo nella tua panchina. Se lo fai, metti tre segnalini danno su questo Pokémon.",
			'en-us': "Once during your turn, if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 3 damage counters on this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Cercle Hurlant",
			'de-de': "Kreischender Kreis",
			'es-es': "Círculo de Gritos",
			'pt-br': "Roda da Gritaria",
			'it-it': "Cerchio Urlante",
			'en-us': "Screaming Circle"
		},

		effect: {
			'fr-fr': "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon de Banc de votre adversaire.",
			'de-de': "Lege für jedes Pokémon auf der Bank deines Gegners 2 Schadensmarken auf das Aktive Pokémon deines Gegners.",
			'es-es': "Pon 2 contadores de daño en el Pokémon Activo de tu rival por cada uno de los Pokémon en Banca de tu rival.",
			'pt-br': "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente para cada Pokémon no Banco do seu oponente.",
			'it-it': "Metti due segnalini danno sul Pokémon attivo del tuo avversario per ogni suo Pokémon in panchina.",
			'en-us': "Put 2 damage counters on your opponent's Active Pokémon for each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
	},

	thirdParty: {
		cardmarket: 505880
	}
}

export default card
