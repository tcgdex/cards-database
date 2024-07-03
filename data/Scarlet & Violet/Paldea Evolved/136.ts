import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [302],
	set: Set,

	name: {
		fr: "Ténéfix",
		en: "Sableye",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Mauvais Œil",
			en: "Night Eyes",
			es: "Ojos Nocturnos",
			it: "Occhi della Notte",
			pt: "Olhos da Noite",
			de: "Nachtaugen"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Darkness"],

		name: {
			fr: "Griffe Invisible",
			en: "Unseen Claw",
			es: "Garra Oculta",
			it: "Artigli Invisibili",
			pt: "Garra Despercebida",
			de: "Klammheimliche Klaue"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 70 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 70 more damage.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 70 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 70 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card