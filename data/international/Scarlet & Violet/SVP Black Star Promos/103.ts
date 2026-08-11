import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		'en-us': "Houndoom ex",
		'fr-fr': "Démolosse-ex",
		'es-es': "Houndoom ex",
		'it-it': "Houndoom-ex",
		'pt-br': "Houndoom ex",
		'de-de': "Hundemon-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Evil Claw",
			'fr-fr': "Griffe Maléfique",
			'es-es': "Garra Malvada",
			'it-it': "Artiglio Maligno",
			'pt-br': "Garra Maligna",
			'de-de': "Böse Klaue"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 90
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Hound's Fang",
			'fr-fr': "Croc de Molosse",
			'es-es': "Colmillo del Sabueso",
			'it-it': "Zanna del Segugio",
			'pt-br': "Cãoninos",
			'de-de': "Hundefänge"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Tsuji",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 764546,
				tcgplayer: 546754
			},
		}
	],
}

export default card
