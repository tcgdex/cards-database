import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		en: "Breloom V",
		fr: "Chapignon V",
		es: "Breloom V",
		it: "Breloom V",
		pt: "Breloom V",
		de: "Kapilz V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Counter",
			fr: "Riposte",
			de: "Konter",
			es: "Contraataque",
			pt: "Contra-atacar",
			it: "Contrattacco"
		},

		damage: "20+",

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			de: "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu.",
			es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			pt: "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
			it: "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
			de: "Tempo-Cross",
			es: "Puñetazo Mach",
			pt: "Cruzado Veloz",
			it: "Incromach"
		},

		damage: 140
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582034,
		tcgplayer: 253076
	}
}

export default card
