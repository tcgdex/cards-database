import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [594],
	set: Set,

	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		de: "Mamolida",
		it: "Alomomola",
		pt: "Alomomola",
		es: "Alomomola",
		'es-mx': "Alomomola"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gentle Fin",
			fr: "Nageoire Douce",
			de: "Sanfte Flosse",
			it: "Pinna Gentile",
			pt: "Barbatana Afável",
			es: "Aleta Gentil",
			'es-mx': "Aleta Gentil"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may put a Basic Pokémon with 70 HP or less from your discard pile onto your Bench.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez placer un Pokémon de base ayant 70 PV ou moins de votre pile de défausse sur votre Banc.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Basis-Pokémon mit 70 oder weniger KP aus deinem Ablagestapel auf deine Bank legen.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi prendere un Pokémon Base con 70 PS o meno dalla tua pila degli scarti e metterlo nella tua panchina.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá colocar um Pokémon Básico com 70 PS ou menos da sua pilha de descarte no seu Banco.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes poner 1 Pokémon Básico con 70 PS o menos de tu pila de descartes en tu Banca.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes poner 1 Pokémon Básico con 70 PS o menos de tu pila de descartes en tu Banca."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade",
			it: "Cascata",
			pt: "Cachoeira",
			es: "Cascada",
			'es-mx': "Cascada"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835948
	},

	variants: [{
		type: "normal",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}, {
		type: "reverse",
		size: "standard",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "pokeball",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "masterball",
		description: "Found in Booster Packs",
		set: "parallel"
	}]
}

export default card