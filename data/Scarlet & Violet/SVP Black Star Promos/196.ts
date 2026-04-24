import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex",
		fr: "Dracaufeu-ex",
		de: "Glurak-ex",
		it: "Charizard-ex",
		es: "Charizard ex",
		pt: "Charizard ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [6],
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo",
		it: "Charmeleon",
		es: "Charmeleon",
		pt: "Charmeleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Infernal Reign",
			fr: "Règne Infernal",
			de: "Infernalische Herrschaft",
			it: "Regno Infernale",
			es: "Reino Infernal",
			pt: "Reino Infernal"
	},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Basic {R} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie {R} de base et les attacher à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 3 Basis-{R}-Energiekarten durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Energia base {R} e assegnarle ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Energía {R} Básica y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá procurar por até 3 cartas de Energia {R} Básica no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho."
	}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Burning Darkness",
			fr: "Obscurité Brûlante",
			de: "Brennende Finsternis",
			it: "Oscurità Infuocata",
			es: "Oscuridad Ardiente",
			pt: "Escuridão Ardente"
	},

		effect: {
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou."
	},

		damage: "180+"
	}],

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
		},
		{
			type: "lenticular",
			size: "jumbo"
		}
	]
}

export default card
