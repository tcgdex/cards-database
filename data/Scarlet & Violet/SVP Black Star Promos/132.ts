import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [658],
	set: Set,

	name: {
		en: "Greninja ex",
		fr: "Amphinobi-ex",
		es: "Greninja ex",
		it: "Greninja-ex",
		pt: "Greninja ex",
		de: "Quajutsu-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stealthy Shuriken",
			fr: "Shuriken Furtif",
			es: "Shuriken Sigiloso",
			it: "Lame Furtive",
			pt: "Estrela Ninja Furtiva",
			de: "Tarn-Shuriken"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 40 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Torrential Slash",
			fr: "Tranche Torrentielle",
			es: "Tajo Torrencial",
			it: "Lacerazione Torrenziale",
			pt: "Talho Torrencial",
			de: "Reißender Schnitt"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "SIE NANAHARA"
}

export default card