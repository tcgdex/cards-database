import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		it: "Lokix",
		pt: "Lokix",
		de: "Lextremo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bounce",
			fr: "Rebond",
			es: "Bote",
			it: "Rimbalzo",
			pt: "Ricochete",
			de: "Sprungfeder"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Punishing Kick",
			fr: "Coup de Pied Punitif",
			es: "Patada Castigadora",
			it: "Calcio Punitivo",
			pt: "Chute Punitivo",
			de: "Strafender Kick"
		},

		effect: {
			en: "This attack does 40 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 40 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 740657
	}
}

export default card