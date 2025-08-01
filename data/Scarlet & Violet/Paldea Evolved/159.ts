import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [279],
	set: Set,

	name: {
		fr: "Bekipan",
		en: "Pelipper",
		es: "Pelipper",
		it: "Pelipper",
		pt: "Pelipper",
		de: "Pelipper"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Rumeur",
			en: "Hearsay",
			es: "Rumorología",
			it: "Diceria",
			pt: "Boato",
			de: "Hörensagen"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez choisir l'une de ces options : ajouter une carte Supporter de votre pile de défausse à votre main, ou chercher dans votre deck une carte Supporter, la montrer, l'ajouter à votre main, puis mélanger votre deck.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 1: put a Supporter card from your discard pile into your hand; or search your deck for a Supporter card, reveal it, put it into your hand, and then shuffle your deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes elegir una opción: pon 1 carta de Partidario de tu pila de descartes en tu mano; o busca en tu baraja 1 carta de Partidario, enséñala, ponla en tu mano y, después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scegliere di prendere una carta Aiuto dalla tua pila degli scarti e aggiungerla alle carte che hai in mano, oppure di cercare nel tuo mazzo una carta Aiuto, mostrarla, aggiungerla alle carte che hai in mano e poi rimischiare le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá escolher 1: coloque uma carta de Apoiador da sua pilha de descarte na sua mão; ou procure por uma carta de Apoiador no seu baralho, revele-a, coloque-a na sua mão e, em seguida, embaralhe o seu baralho.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 wählen: Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand; oder durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner, nimm sie auf deine Hand und mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Cru-Ailes",
			en: "Wing Attack",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shinya Komatsu",

	thirdParty: {
		cardmarket: 715634
	}
}

export default card