import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [362],
	set: Set,

	name: {
		en: "Glalie",
		fr: "Oniglali",
		es: "Glalie",
		it: "Glalie",
		pt: "Glalie",
		de: "Firnontor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Damage Beat",
			fr: "Rouste Ravageuse",
			es: "Toque Dañino",
			it: "Battidanni",
			pt: "Pancada Destruidora",
			de: "Heftige Prügel"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Crazy Headbutt",
			fr: "Coup d'Boule Fou",
			es: "Cabezazo Alocado",
			it: "Bottintesta Folle",
			pt: "Cabeçada Louca",
			de: "Irre Kopfnuss"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	}
}

export default card