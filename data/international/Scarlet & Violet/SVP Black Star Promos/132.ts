import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [658],
	set: Set,

	name: {
		'en-us': "Greninja ex",
		'fr-fr': "Amphinobi-ex",
		'es-es': "Greninja ex",
		'it-it': "Greninja-ex",
		'pt-br': "Greninja ex",
		'de-de': "Quajutsu-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stealthy Shuriken",
			'fr-fr': "Shuriken Furtif",
			'es-es': "Shuriken Sigiloso",
			'it-it': "Lame Furtive",
			'pt-br': "Estrela Ninja Furtiva",
			'de-de': "Tarn-Shuriken"
		},

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 40 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Torrential Slash",
			'fr-fr': "Tranche Torrentielle",
			'es-es': "Tajo Torrencial",
			'it-it': "Lacerazione Torrenziale",
			'pt-br': "Talho Torrencial",
			'de-de': "Reißender Schnitt"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "SIE NANAHARA",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 770951,
				tcgplayer: 562018
			},
		}
	],
}

export default card
