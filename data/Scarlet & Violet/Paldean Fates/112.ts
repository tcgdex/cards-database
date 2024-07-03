import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [244],
	set: Set,

	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		it: "Entei",
		pt: "Entei",
		de: "Entei"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Pressure",
			fr: "Pression",
			es: "Presión",
			it: "Pressione",
			pt: "Pressão",
			de: "Erzwinger"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 20 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blaze Ball",
			fr: "Balle Incendiaire",
			es: "Bola Ascuas",
			it: "Pallafuoco",
			pt: "Bola de Fogo",
			de: "Brandball"
		},

		effect: {
			en: "This attack does 20 more damage for each Fire Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía Fire unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia Fire assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Fire ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Fire-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card