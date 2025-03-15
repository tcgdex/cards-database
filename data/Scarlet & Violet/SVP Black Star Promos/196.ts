import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		en: "Charizard ex",
		pt: "Charizard ex",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Infernal Reign",
			pt: "",
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Basic Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			pt: "Quando vocë jogar este Pokémon da sua mão para evoluir I dos seus Pokémon durante seu turno, você poderá procurar por até 3 cartas de Energia de Fogo Básica no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
		}
	}],

	attacks: [
		{
			cost: ["Fire", "Fire"],

			name: {
				en: "Burning Darkness",
				pt: "Escuridão Ardente"
			},

			effect: {
				en: "This attack does 30 more damage for each Prize card your opponent has taken.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou."
			},

			damage: "180+"
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],	

	retreat: 2,
	regulationMark: "G"
}

export default card