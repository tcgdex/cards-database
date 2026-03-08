import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Camerupt ex",
		fr: "Méga-Camérupt-ex",
		de: "Mega-Camerupt-ex",
		it: "Mega Camerupt-ex",
		es: "Mega-Camerupt ex",
		pt: "Mega Camerupt ex",
		'es-mx': "Mega-Camerupt ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub",
		it: "Numel",
		es: "Numel",
		pt: "Numel",
		'es-mx': "Numel"
	},
	stage: "Stage1",
	dexId: [323],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Roasting Heat",
			fr: "Rôtissoire",
			de: "Bratende Hitze",
			it: "Calore Rovente",
			es: "Calor Abrasador",
			pt: "Calor de Lascar",
			'es-mx': "Calor Abrasador"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Burned, this attack does 160 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Brûlé, cette attaque inflige 160 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners verbrannt ist, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è bruciato, questo attacco infligge 160 danni in più.",
			es: "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 160 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Queimado, este ataque causará 160 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 160 puntos de daño más."
		},

		damage: "80+"
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Volcanic Meteor",
			fr: "Météore Volcanique",
			de: "Vulkanmeteor",
			it: "Meteora Vulcanica",
			es: "Meteoro Volcánico",
			pt: "Meteoro Vulcânico",
			'es-mx': "Meteoro Volcánico"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 280
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		tcgplayer: 654495,
		cardmarket: 851227
	}
}

export default card