import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Eldegoss",
		fr: "Blancoton",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "Kouki Saitou",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cotton Lift",
			fr: "Coton Tonique",
			es: "Impulso Algodón",
			it: "Sollevacotone",
			pt: "Cotton Lift",
			de: "Wattelift"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie de base, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Básica, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia base, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Once during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Basis-Energiekarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde",
			es: "Rizo Algodón",
			it: "Cotonscudo",
			pt: "Cotton Guard",
			de: "Watteschild"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	description: {
		en: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	dexId: [830],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574040
	}
}

export default card
