import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Appletun",
		fr: "Dratatin",
		es: "Appletun",
		it: "Appletun",
		pt: "Appletun",
		de: "Schlapfel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			en: "Thick Mucus",
			fr: "Mucus Épais",
			es: "Mucosidad Espesa",
			it: "Mucosa Densa",
			pt: "Thick Mucus",
			de: "Zäher Schleim"
		},

		effect: {
			en: "This attack does 70 damage for each Special Energy card attached to your opponent’s Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Énergie spéciale attachée aux Pokémon de votre adversaire.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Energía Especial unida a los Pokémon de tu rival.",
			it: "Questo attacco infligge 70 danni per ogni carta Energia speciale assegnata ai Pokémon del tuo avversario.",
			pt: "This attack does 70 damage for each Special Energy card attached to your opponent’s Pokémon.",
			de: "Diese Attacke fügt für jede an den Pokémon deines Gegners angelegte Spezial-Energiekarte 70 Schadenspunkte zu."
		},

		damage: "70×",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Fighting Tackle",
			fr: "Charge Combative",
			es: "Placaje Lucha",
			it: "Azione da Combattente",
			pt: "Fighting Tackle",
			de: "Kampf-Tackle"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 80 danni in più.",
			pt: "If your opponent’s Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	dexId: [842],

	evolveFrom: {
		en: "Applin",
		fr: "Verpom",
		es: "Applin",
		it: "Applin",
		pt: "Applin",
		de: "Knapfel"
	},

	description: {
		en: "Its body is covered in sweet nectar, and the skin on its back is especially yummy. Children used to have it as a snack."
	}
}

export default card