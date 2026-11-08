import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		'en-us': "Koraidon ex",
		'fr-fr': "Koraidon-ex",
		'es-es': "Koraidon ex",
		'it-it': "Koraidon-ex",
		'pt-br': "Koraidon ex",
		'de-de': "Koraidon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dino Cry",
			'fr-fr': "Cri Dino",
			'es-es': "Dinoalarido",
			'it-it': "Dinogrido",
			'pt-br': "Brado Dino",
			'de-de': "Dino-Ruf"
		},

		effect: {
			'en-us': "Once during your turn, you may attach up to 2 Basic {F} Energy cards from your discard pile to your Basic {F} Pokémon in any way you like. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon {F} de base, comme il vous plaît. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon {F} Básicos de la manera que desees. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon Base {F} fino a due carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar até 2 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon {F} Básicos como desejar. Se você usar esta Habilidade, o seu turno acabará.",
			'de-de': "Einmal während deines Zuges kannst du bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an deine Basis-{F}-Pokémon anlegen. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Wild Impact",
			'fr-fr': "Impact Sauvage",
			'es-es': "Impacto Brutal",
			'it-it': "Impatto Selvaggio",
			'pt-br': "Impacto Selvagem",
			'de-de': "Wilde Erschütterung"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "aky CG Works",
	suffix: "ex",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo"
		}
	],

	description: {
		'en-us': "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",
	},

	thirdParty: {
        cardmarket: 689767,
        tcgplayer: 475421
    }
}

export default card