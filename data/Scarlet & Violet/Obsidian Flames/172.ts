import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [508],
	set: Set,

	name: {
		fr: "Mastouffe",
		en: "Stoutland",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Panique Mangeouille",
			en: "Chomp Chomp Panic",
			es: "Pánico Ñam Ñam",
			it: "Masticapanico",
			pt: "Pânico Nhoc Nhoc",
			de: "Mampfpanik"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			en: "This attack does 50 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			es: "Este ataque hace 50 puntos de daño por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Croc Aiguisé",
			en: "Sharp Fang",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Keisin",

	thirdParty: {
		cardmarket: 725252
	}
}

export default card