import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Hearthflame Mask Ogerpon ex",
		fr: "Ogerpon Masque du Fourneau-ex",
		es: "Ogerpon Máscara Horno ex",
		pt: "Ogerpon Máscara Fornalha ex",
		it: "Ogerpon Maschera Focolare-ex",
		de: "Ofenmaske-Ogerpon-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Wrathful Hearth",
			fr: "Fourneau du Courroux",
			es: "Horno Iracundo",
			pt: "Fornalha Enfurecida",
			it: "Focolare Iracondo",
			de: "Zorniger Ofen"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Dynamic Blaze",
			fr: "Brasier Dynamique",
			es: "Llamarada Dinámica",
			pt: "Incêndio Dinâmico",
			it: "Fiammata Dinamica",
			de: "Dynamischer Brand"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 140 more damage, and discard all Energy from this Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 140 dégâts supplémentaires et vous défaussez toutes les Énergies de ce Pokémon.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 140 puntos de daño más, y descartas todas las Energías de este Pokémon.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 140 pontos de dano a mais, e descarte todas as Energias deste Pokémon.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 140 danni in più e tu scarti tutte le Energie da questo Pokémon.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 140 Schadenspunkte mehr zu, und du legst alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: "140+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Yukihiro Tada",

	thirdParty: {
		cardmarket: 805406
	}
}

export default card