import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Buzzap Generator",
			fr: "Générateur Buzzap",
			es: "Generador Matazumbido",
			it: "Generascarica",
			pt: "Gerador de Zumbido",
			de: "Zischender Generator"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may search your deck for up to 2 Lightning Energy cards and attach them to your Lightning Pokémon in any way you like. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Lightning, puis les attacher à vos Pokémon Lightning comme il vous plaît. Mélangez ensuite votre deck. Si vous avez cherché dans votre deck de cette façon, ce Pokémon est mis K.O.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes buscar en tu baraja hasta 2 cartas de Energía Lightning y unirlas a tus Pokémon Lightning de la manera que desees. Después, baraja las cartas de tu baraja. Si has buscado en tu baraja de esta manera, este Pokémon queda Fuera de Combate.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi cercare nel tuo mazzo fino a due carte Energia Lightning e assegnarle ai tuoi Pokémon Lightning nel modo che preferisci. Poi rimischia le carte del tuo mazzo. Se hai cercato nel tuo mazzo in questo modo, questo Pokémon viene messo KO.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá procurar por até 2 cartas de Energia Lightning no seu baralho e ligá-las aos seus Pokémon Lightning como desejar. Em seguida, embaralhe o seu baralho. Se você procurar no seu baralho desta forma, este Pokémon será Nocauteado.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du dein Deck nach bis zu 2 Lightning-Energiekarten durchsuchen und sie beliebig an deine Lightning-Pokémon anlegen. Mische anschließend dein Deck. Wenn du auf diese Weise dein Deck durchsucht hast, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",
	illustrator: "Ryo Ueda",

	description: {
		en: "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode."
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	regulationMark: "D"
}

export default card
