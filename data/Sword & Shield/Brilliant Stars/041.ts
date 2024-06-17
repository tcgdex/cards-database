import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [490],
	set: Set,

	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		pt: "Manaphy",
		de: "Manaphy"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wave Veil",
			fr: "Voile Houleux",
			es: "Velo de Olas",
			it: "Ondavelo",
			pt: "Véu de Ondas",
			de: "Wellenschleier"
		},

		effect: {
			en: "Prevent all damage done to your Benched Pokémon by attacks from your opponent's Pokémon.",
			fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques des Pokémon de votre adversaire.",
			es: "Evita todo el daño infligido a tus Pokémon en Banca por ataques de los Pokémon de tu rival.",
			it: "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi dei Pokémon del tuo avversario.",
			pt: "Previna todo o dano causado aos seus Pokémon no Banco por ataques dos Pokémon do seu oponente.",
			de: "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken von Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card