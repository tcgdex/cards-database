import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [135],
	set: Set,

	name: {
		'en-us': "Jolteon ex",
		'fr-fr': "Voltali-ex",
		'es-es': "Jolteon ex",
		'pt-br': "Jolteon ex",
		'it-it': "Jolteon-ex",
		'de-de': "Blitza-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Flashing Spear",
			'fr-fr': "Lance Aveuglante",
			'es-es': "Lanza Reluciente",
			'pt-br': "Lança Lampejante",
			'it-it': "Lancia Abbagliante",
			'de-de': "Leuchtender Speer"
		},

		effect: {
			'en-us': "You may discard up to 2 Basic Energy from your Benched Pokémon. This attack does 90 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 2 Énergies de base de vos Pokémon de Banc. Cette attaque inflige 90 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar hasta 2 Energías Básicas de tus Pokémon en Banca. Este ataque hace 90 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'pt-br': "Você pode descartar até 2 Energias Básicas dos seus Pokémon no Banco. Este ataque causa 90 pontos de dano a mais para cada carta descartada desta forma.",
			'it-it': "Puoi scartare fino a due Energie base dai tuoi Pokémon in panchina. Questo attacco infligge 90 danni in più per ogni carta che hai scartato in questo modo.",
			'de-de': "Du kannst bis zu 2 Basis-Energien von Pokémon auf deiner Bank auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 90 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			'en-us': "Dravite",
			'fr-fr': "Dravite",
			'es-es': "Dravita",
			'pt-br': "Dravita",
			'it-it': "Dravite",
			'de-de': "Dravit"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 280
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "kantaro",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805547,
				tcgplayer: 610508
			}
		},
	],
}

export default card
