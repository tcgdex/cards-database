import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Camerupt ex",
		'fr-fr': "Méga-Camérupt-ex",
		'de-de': "Mega-Camerupt-ex",
		'it-it': "Mega Camerupt-ex",
		'es-es': "Mega-Camerupt ex",
		'pt-br': "Mega Camerupt ex",
		'es-mx': "Mega-Camerupt ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub",
		'it-it': "Numel",
		'es-es': "Numel",
		'pt-br': "Numel",
		'es-mx': "Numel"
	},
	stage: "Stage1",
	dexId: [323],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Roasting Heat",
			'fr-fr': "Rôtissoire",
			'de-de': "Bratende Hitze",
			'it-it': "Calore Rovente",
			'es-es': "Calor Abrasador",
			'pt-br': "Calor de Lascar",
			'es-mx': "Calor Abrasador"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Burned, this attack does 160 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Brûlé, cette attaque inflige 160 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners verbrannt ist, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è bruciato, questo attacco infligge 160 danni in più.",
			'es-es': "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 160 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Queimado, este ataque causará 160 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 160 puntos de daño más."
		},

		damage: "80+"
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Volcanic Meteor",
			'fr-fr': "Météore Volcanique",
			'de-de': "Vulkanmeteor",
			'it-it': "Meteora Vulcanica",
			'es-es': "Meteoro Volcánico",
			'pt-br': "Meteoro Vulcânico",
			'es-mx': "Meteoro Volcánico"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 280
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851227,
				tcgplayer: 654495
			}
		},
	],
}

export default card
