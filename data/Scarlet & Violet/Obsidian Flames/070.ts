import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [642],
	set: Set,

	name: {
		fr: "Fulguris",
		en: "Thundurus",
		es: "Thundurus",
		it: "Thundurus",
		pt: "Thundurus",
		de: "Voltolos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Intempéries",
			en: "Adverse Weather",
			es: "Mal Tiempo",
			it: "Meteo Avverso",
			pt: "Clima Ruim",
			de: "Widriges Wetter"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques des Pokémon de votre adversaire.",
			en: "As long as this Pokémon is in the Active Spot, prevent all damage done to your Benched Pokémon by attacks from your opponent's Pokémon.",
			es: "Mientras este Pokémon esté en el Puesto Activo, se evita todo el daño infligido a tus Pokémon en Banca por ataques de los Pokémon de tu rival.",
			it: "Fintanto che questo Pokémon è in posizione attiva, previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi dei Pokémon del tuo avversario.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, previna todo o dano causado aos seus Pokémon no Banco por ataques dos Pokémon do seu oponente.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken von Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			fr: "Éclair Géant",
			en: "Gigantic Bolt",
			es: "Rayo Gigantesco",
			it: "Fulmine Colossale",
			pt: "Raio Gigantesco",
			de: "Gigantischer Blitz"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 90 dégâts.",
			en: "This Pokémon also does 90 damage to itself.",
			es: "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 90 danni a se stesso.",
			pt: "Este Pokémon também causa 90 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card