import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Hoopa ex",
		fr: "Hoopa-ex",
		es: "Hoopa ex",
		it: "Hoopa-ex",
		pt: "Hoopa ex",
		de: "Hoopa-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
			es: "Comprimir Energía",
			it: "Sgretolenergia",
			pt: "Esmagamento de Energia",
			de: "Zermalmende Energie"
		},

		effect: {
			en: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Bandit's Fist",
			fr: "Poing de Bandit",
			es: "Puño Bandido",
			it: "Pugno del Malandrino",
			pt: "Punho Bandido",
			de: "Banditenfaust"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Bandit's Fist.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poing de Bandit.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puño Bandido.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugno del Malandrino.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Punho Bandido.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Banditenfaust nicht einsetzen."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 740611
	}
}

export default card