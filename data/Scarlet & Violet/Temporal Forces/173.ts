import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [369],
	set: Set,

	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Memory Dive",
			fr: "Plongée Mémoire",
			es: "Zambullida de Recuerdos",
			it: "Tuffo nella Memoria",
			pt: "Mergulho na Memória",
			de: "Gedächtnistauchgang"
		},

		effect: {
			en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
			fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin des Énergies nécessaires pour utiliser chaque attaque.)",
			es: "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque).",
			it: "I tuoi Pokémon evoluti possono usare gli attacchi dei loro stadi evolutivi precedenti. Devi comunque avere l'Energia necessaria per usare quegli attacchi.",
			pt: "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas Evoluções anteriores. (Você ainda precisa da Energia necessária para usar cada ataque.)",
			de: "Jedes deiner entwickelten Pokémon kann die Attacken seiner vorangegangenen Entwicklungen einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			it: "Pinnalama",
			pt: "Barbatana Cortante",
			de: "Rasierflosse"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card