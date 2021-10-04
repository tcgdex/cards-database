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
		en: "Flapple",
		fr: "Pomdrapi",
		es: "Flapple",
		it: "Flapple",
		pt: "Flapple",
		de: "Drapfel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "Anesaki Dynamic",

	attacks: [{
		name: {
			en: "Acidic Mucus",
			fr: "Mucus Acide",
			es: "Mucosidad Ácida",
			it: "Mucosa Acida",
			pt: "Acidic Mucus",
			de: "Ätzender Schleim"
		},

		effect: {
			en: "This attack does 50 damage for each of your opponent’s Pokémon in play that has an Ability.",
			fr: "Cette attaque inflige 50 dégâts pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			es: "Este ataque hace 50 puntos de daño por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			it: "Questo attacco infligge 50 danni per ogni Pokémon in gioco del tuo avversario che ha un’abilità.",
			pt: "This attack does 50 damage for each of your opponent’s Pokémon in play that has an Ability.",
			de: "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte zu."
		},

		damage: "50×",
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

	retreat: 1,
	dexId: [841],

	evolveFrom: {
		en: "Applin",
		fr: "Verpom",
		es: "Applin",
		it: "Applin",
		pt: "Applin",
		de: "Knapfel"
	},

	description: {
		en: "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple."
	}
}

export default card