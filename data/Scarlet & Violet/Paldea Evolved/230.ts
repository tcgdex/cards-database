import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [205],
	set: Set,

	name: {
		fr: "Foretress-ex",
		en: "Forretress ex",
		es: "Forretress ex",
		it: "Forretress-ex",
		pt: "Forretress ex",
		de: "Forstellka-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Énergie Explosive",
			en: "Exploding Energy",
			es: "Energía Explosiva",
			it: "Esplodienergia",
			pt: "Energia Explosiva",
			de: "Explodierende Energie"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 5 cartes Énergie {G} de base et les attacher à vos Pokémon, comme il vous plaît. Mélangez ensuite votre deck. Si vous avez cherché dans votre deck de cette façon, ce Pokémon est mis K.O.",
			en: "Once during your turn, you may search your deck for up to 5 Basic {G} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 5 cartas de Energía {G} Básica y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja. Si has buscado en tu baraja de esta manera, este Pokémon queda Fuera de Combate.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a cinque carte Energia base {G} e assegnarle ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo. Se hai cercato nel tuo mazzo in questo modo, questo Pokémon viene messo KO.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 5 cartas de Energia {G} Básica no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho. Se você procurar no seu baralho desta forma, este Pokémon será Nocauteado.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 5 Basis-{G}-Energiekarten durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck. Wenn du auf diese Weise dein Deck durchsucht hast, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Pression de Garde",
			en: "Guard Press",
			es: "Presión de Guardia",
			it: "Pressadifesa",
			pt: "Aperto Protetor",
			de: "Schutzdruck"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 715477
	}
}

export default card