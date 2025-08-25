import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [330],
	set: Set,

	name: {
		en: "Flygon V",
		fr: "Libégon V",
		es: "Flygon V",
		it: "Flygon V",
		pt: "Flygon V",
		de: "Libelldra V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Fighting"],

		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
			es: "Rociado de Arena",
			it: "Silicospruzzo",
			pt: "Spray de Areia",
			de: "Sandspray"
		},

		damage: 70
	}, {
		cost: ["Grass", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Draconic Impulse",
			fr: "Impulsion Draconienne",
			es: "Impulso Draco",
			it: "Impulso del Drago",
			pt: "Impulso Dracônico",
			de: "Drachenimpuls"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 160 more damage, and discard 3 Energy from this Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 160 dégâts supplémentaires et vous défaussez 3 Énergies de ce Pokémon.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 160 puntos de daño más, y descartas 3 Energías de este Pokémon.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 160 danni in più e scarti tre Energie da questo Pokémon.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 160 pontos de dano a mais, e descarte 3 Energias deste Pokémon.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 160 Schadenspunkte mehr zu, und du legst 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: "160+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608652,
		tcgplayer: 263883
	}
}

export default card