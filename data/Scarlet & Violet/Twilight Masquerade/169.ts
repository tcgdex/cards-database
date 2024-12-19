import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [192],
	set: Set,

	name: {
		en: "Sunflora",
		fr: "Héliatronc",
		es: "Sunflora",
		it: "Sunflora",
		pt: "Sunflora",
		de: "Sonnflora"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Redirected Sunlight",
			fr: "Redirection Solaire",
			es: "Luz Solar Reflectada",
			it: "Rifrangisole",
			pt: "Desvio de Luz Solar",
			de: "Umgeleitetes Sonnenlicht"
		},

		effect: {
			en: "This attack does 60 damage for each Fire Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie Fire attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada Energía Fire unida a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 60 danni per ogni Energia Fire assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia Fire ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Fire-Energie 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			it: "Megassorbimento",
			pt: "Megadreno",
			de: "Megasauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegrin",
		es: "Sunkern",
		it: "Sunkern",
		pt: "Sunkern",
		de: "Sonnkern"
	}
}

export default card