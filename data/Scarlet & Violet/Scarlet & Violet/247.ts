import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		en: "Koraidon ex",
		fr: "Koraidon-ex",
		es: "Koraidon ex",
		it: "Koraidon-ex",
		pt: "Koraidon ex",
		de: "Koraidon-ex"
	},

	rarity: "Special illustration rare",
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
			it: "Dinogrido",
			pt: "Brado Dino",
			de: "Dino-Ruf"
		},

		effect: {
			en: "Once during your turn, you may attach up to 2 Basic {F} Energy cards from your discard pile to your Basic {F} Pokémon in any way you like. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon {F} de base, comme il vous plaît. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon {F} Básicos de la manera que desees. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon Base {F} fino a due carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, você poderá ligar até 2 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon {F} Básicos como desejar. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an deine Basis-{F}-Pokémon anlegen. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Wild Impact",
			fr: "Impact Sauvage",
			es: "Impacto Brutal",
			it: "Impatto Selvaggio",
			pt: "Impacto Selvagem",
			de: "Wilde Erschütterung"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Ryota Murayama",

	thirdParty: {
        cardmarket: 689767,
        tcgplayer: 490044
    }
}

export default card