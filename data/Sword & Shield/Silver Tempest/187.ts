import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Ho-Oh V",
		fr: "Ho-Oh V",
		es: "Ho-Oh V",
		it: "Ho-Oh V",
		pt: "Ho-Oh V",
		de: "Ho-Oh V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Reviving Flame",
			fr: "Flamme Vivifiante",
			es: "Llama Resucitante",
			it: "Fiamma Rivitalizzante",
			pt: "Ressurreição das Chamas",
			de: "Wiederbelebende Flamme"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, attach up to 4 basic Energy cards from your discard pile to this Pokémon. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, attachez jusqu'à 4 cartes Énergie de base de votre pile de défausse à ce Pokémon. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Si lo haces, une hasta 4 cartas de Energía Básica de tu pila de descartes a este Pokémon. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua pila degli scarti, puoi metterlo nella tua panchina. Se lo fai, assegna a questo Pokémon fino a quattro carte Energia base dalla tua pila degli scarti. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Se fizer isto, ligue até 4 cartas de Energia básica da sua pilha de descarte a este Pokémon. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in deinem Ablagestapel ist, kannst du es auf deine Bank legen. Wenn du das machst, lege bis zu 4 Basis-Energiekarten aus deinem Ablagestapel an dieses Pokémon an. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rainbow Burn",
			fr: "Brûlure Arc-en-Ciel",
			es: "Ardor Arcoíris",
			it: "Fiammabaleno",
			pt: "Queimadura Arco-íris",
			de: "Regenbogenfeuer"
		},

		effect: {
			en: "This attack does 30 more damage for each type of basic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type d'Énergie de base attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni tipo di Energia base assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada tipo de Energia básica ligada a este Pokémon.",
			de: "Diese Attacke fügt für jeden an dieses Pokémon angelegten Basis-Energietyp 30 Schadenspunkte mehr zu."
		},

		damage: "100+"
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
		cardmarket: 682187,
		tcgplayer: 451835
	}
}

export default card