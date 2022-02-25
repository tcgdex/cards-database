import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Aggron V",
		fr: "Galeking V",
		es: "Aggron V",
		it: "Aggron V",
		pt: "Aggron V",
		de: "Stolloss V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Rock Slide",
			fr: "Éboulement",
			es: "Avalancha",
			it: "Frana",
			pt: "Deslize de Pedras",
			de: "Steinhagel"
		},

		effect: {
			en: "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 90
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Merciless Strike",
			fr: "Impact Impitoyable",
			es: "Golpe Despiadado",
			it: "Colpo Implacabile",
			pt: "Golpe Impiedoso",
			de: "Gnadenloser Schlag"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 150 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 150 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 150 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "150+"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card