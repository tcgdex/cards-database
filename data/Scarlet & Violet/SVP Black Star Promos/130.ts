import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [983],
	set: Set,

	name: {
		en: "Kingambit",
		fr: "Scalpereur",
		es: "Kingambit",
		it: "Kingambit",
		pt: "Kingambit",
		de: "Gladimperio"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Strike Down",
			fr: "Au Tapis",
			es: "Derrotar",
			it: "Atterramento",
			pt: "Derrocada",
			de: "Niederstrecken"
		},

		effect: {
			en: "If your opponent's Active Pokémon has 4 or more damage counters on it, that Pokémon is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire a au moins 4 marqueurs de dégâts, il est mis K.O.",
			es: "Si el Pokémon Activo de tu rival tiene 4 contadores de daño o más sobre él, ese Pokémon queda Fuera de Combate.",
			it: "Se il Pokémon attivo del tuo avversario ha quattro o più segnalini danno, quel Pokémon viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente tiver 4 ou mais contadores de dano nele, aquele Pokémon será Nocauteado.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Massive Rend",
			fr: "Déchirure Massive",
			es: "Corte Masivo",
			it: "Supersquarcio",
			pt: "Laceração Massiva",
			de: "Riesiger Riss"
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "G",
	illustrator: "Oku"
}

export default card