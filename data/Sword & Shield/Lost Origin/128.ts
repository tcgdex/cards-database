import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [801],
	set: Set,

	name: {
		en: "Magearna",
		fr: "Magearna",
		es: "Magearna",
		it: "Magearna",
		pt: "Magearna",
		de: "Magearna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Gear Cutter",
			fr: "Engrenage Tranchant",
			es: "Engranaje Cortante",
			it: "Meccanotaglio",
			pt: "Engrenagem Cortante",
			de: "Schneidgetriebe"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Windup Beam",
			fr: "Rayon à Remontoir",
			es: "Rayo a Cuerda",
			it: "Raggio Caricato",
			pt: "Feixe de Corda",
			de: "Aufziehstrahl"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 60 more damage, and your opponent's Active Pokémon is now Confused.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 60 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 60 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674141
	}
}

export default card