import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		en: "Alolan Vulpix V",
		fr: "Goupix d'Alola V",
		es: "Vulpix de Alola V",
		it: "Vulpix di Alola V",
		pt: "Vulpix de Alola V",
		de: "Alola Vulpix-V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			en: "White Drop",
			fr: "Chute Blanche",
			es: "Gota Blanca",
			it: "Biancaduta",
			pt: "Queda Branca",
			de: "Weißer Fall"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 50 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 50 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
