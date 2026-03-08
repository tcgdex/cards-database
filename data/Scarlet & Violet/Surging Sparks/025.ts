import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leech Life",
			fr: "Vampirisme",
			es: "Chupavidas",
			it: "Sanguisuga",
			pt: "Suga-vidas",
			de: "Blutsauger"
		},

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			es: "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			it: "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Turbulent Wings",
			fr: "Ailes Tumultueuses",
			es: "Alas Turbulentas",
			it: "Ali Turbolente",
			pt: "Asas Turbulentas",
			de: "Turbulente Flügel"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "matazo",

	thirdParty: {
		cardmarket: 794280
	}
}

export default card
