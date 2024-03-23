import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon ex",
		fr: "Koraidon-ex",
		es: "Koraidon ex",
		it: "Koraidon-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dino Cry",
			fr: "Cri Dino",
			es: "Dinoalarido",
			it: "Dinogrido"
		},

		effect: {
			en: "Once during your turn, you may attach up to 2 Basic Fighting Energy cards from your discard pile to your Basic Fighting Pokémon in any way you like. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie Fighting de base de votre pile de défausse à vos Pokémon Fighting de base, comme il vous plaît. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía Fighting Básica de tu pila de descartes a tus Pokémon Fighting Básicos de la manera que desees. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon Base Fighting fino a due carte Energia base Fighting dalla tua pila degli scarti nel modo che preferisci. Se usi questa abilità, il tuo turno finisce."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Wild Impact",
			fr: "Impact Sauvage",
			es: "Impacto Brutal",
			it: "Impatto Selvaggio"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card