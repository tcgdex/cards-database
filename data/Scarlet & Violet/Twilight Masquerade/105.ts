import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [534],
	set: Set,

	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
		es: "Conkeldurr",
		it: "Conkeldurr",
		pt: "Conkeldurr",
		de: "Meistagrif"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
			es: "Rabieta",
			it: "Collera",
			pt: "Petulância",
			de: "Rappel"
		},

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 80
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gutsy Swing",
			fr: "Coup Courageux",
			es: "Golpe con Agallas",
			it: "Baldocolpo",
			pt: "Balanço Destemido",
			de: "Mutiger Schwung"
		},

		effect: {
			en: "If this Pokémon is affected by a Special Condition, ignore all Energy in this attack's cost.",
			fr: "Si ce Pokémon est affecté par un État Spécial, ignorez toutes les Énergies dans le coût de cette attaque.",
			es: "Si este Pokémon se ve afectado por una Condición Especial, ignora todas las Energías en el coste de este ataque.",
			it: "Se questo Pokémon è influenzato da una condizione speciale, ignora tutte le Energie necessarie per usare questo attacco.",
			pt: "Se este Pokémon estiver afetado por uma Condição Especial, ignore todas as Energias no custo deste ataque.",
			de: "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, ignoriere alle Energien in den Kosten dieser Attacke."
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	}
}

export default card