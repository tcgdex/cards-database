import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Espathra ex",
		fr: "Cléopsytra-ex",
		es: "Espathra ex",
		it: "Espathra-ex",
		pt: "Espathra ex",
		de: "Psiopatra-ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dazzling Gaze",
			fr: "Regard Éblouissant",
			es: "Mirada Deslumbrante",
			it: "Sguardo Accecante",
			pt: "Olhar Deslumbrante",
			de: "Überwältigender Blick"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost {C} more.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent {C} de plus.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival cuestan {C} más.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi usati dal Pokémon attivo del tuo avversario aumenta di {C}.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente custarão {C} a mais.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der vom Aktiven Pokémon deines Gegners eingesetzten Attacken um {C}."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psy Ball",
			fr: "Balle Psy",
			es: "Bola Psi",
			it: "Psicopalla",
			pt: "Bola Psíquica",
			de: "Psyball"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée aux deux Pokémon Actifs.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida a ambos Pokémon Activos.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada a ambos os Pokémon Ativos.",
			de: "Diese Attacke fügt für jede an beide Aktiven Pokémon angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 751532
	}
}

export default card