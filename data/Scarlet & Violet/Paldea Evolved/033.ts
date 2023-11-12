import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Plumeline",
		en: "Oricorio",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Danse Embrasée",
			en: "Ardent Dancing",
			es: "Danza Ardiente",
			it: "Danza Ardente",
			pt: "Dança Calorosa",
			de: "Inbrünstiger Tanz"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Évolutif Actif.",
			en: "Once during your turn, you may heal 20 damage from your Active Evolution Pokémon.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Evolución Activo.",
			it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon Evoluzione attivo da 20 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon de Evolução Ativo.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Entwicklungs-Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Battement",
			en: "Flap",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card