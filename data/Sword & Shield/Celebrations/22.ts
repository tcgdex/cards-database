import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Lugia",
		fr: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		de: "Lugia"
	},

	rarity: "Rare",
	category: "Pokemon",
	types: ["Colorless"],
	illustrator: "Kouki Saitou",
	hp: 130,
	stage: "Basic",

	attacks: [{
		name: {
			en: "Aero Ball",
			fr: "Aéro Ball",
			es: "Bola Aérea",
			it: "Aerosfera",
			pt: "Aerobola",
			de: "Luftball"
		},

		effect: {
			en: "This attack does 20 damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			es: "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			it: "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			de: "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Deep Crush",
			fr: "Écrasement Massif",
			es: "Aplastamiento Profundo",
			it: "Distruzione Profonda",
			pt: "Esmagamento Profundo",
			de: "Tiefenbrecher"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: "160",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
