import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [771],
	set: Set,

	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
		es: "Pyukumuku",
		it: "Pyukumuku",
		pt: "Pyukumuku",
		de: "Gufa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		en: "It's covered in a slime that keeps its skin moist, allowing it to stay on land for days without drying up."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Pitch a Pyukumuku",
			fr: "Lance Concombaffe",
			de: "Gufa-Wurf",
			es: "Lanzar un Pyukumuku",
			pt: "Lançamento de Pyukumuku",
			it: "Spingivia un Pyukumuku"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your hand, you may reveal it and put it on the bottom of your deck. If you do, draw a card. You can't use more than 1 Pitch a Pyukumuku Ability each turn.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre main, vous pouvez le montrer puis le placer en dessous de votre deck. Dans ce cas, piochez une carte. Vous ne pouvez utiliser qu'un talent Lance Concombaffe par tour.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Hand ist, kannst du es deinem Gegner zeigen und unter dein Deck legen. Wenn du das machst, ziehe 1 Karte. Du kannst die Fähigkeit Gufa-Wurf nur einmal pro Zug einsetzen.",
			es: "Una vez durante tu turno, si este Pokémon está en tu mano, puedes enseñarlo y ponerlo en la parte inferior de tu baraja. Si lo haces, roba 1 carta. No puedes usar más de 1 habilidad Lanzar un Pyukumuku en cada turno.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua mão, você poderá revelá-lo e colocá-lo como a carta de baixo do seu baralho. Se fizer isto, compre 1 carta. Você não pode usar mais de 1 Habilidade Lançamento de Pyukumuku por turno.",
			it: "Una sola volta durante il tuo turno, se hai questo Pokémon in mano, puoi mostrarlo e metterlo in fondo al tuo mazzo. Se lo fai, pesca una carta. Puoi usare l'abilità Spingivia un Pyukumuku solo una volta per turno."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			de: "Knöchelhieb",
			es: "Puño con Nudillos",
			pt: "Soco com Punho",
			it: "Noccapugno"
		},

		damage: 50
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582211
	}
}

export default card