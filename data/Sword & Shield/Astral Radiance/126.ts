import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		pt: "Miltank",
		de: "Miltank"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Miracle Body",
			fr: "Corps Miracle",
			es: "Cuerpo Milagroso",
			it: "Corpo Prodigio",
			pt: "Corpo Milagroso",
			de: "Wundersamer Körper"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon V.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V de votre adversaire.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon V de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-V del tuo avversario.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon V do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-V deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rout",
			fr: "Débâcle",
			es: "Esparcir",
			it: "Stanamento",
			pt: "Efeito Cascata",
			de: "Verheerung"
		},

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
