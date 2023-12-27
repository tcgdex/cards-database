import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	illustrator: "Teeziro",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	attacks: [{
		name: {
			en: "Rogue Fangs",
			fr: "Crocs Fougueux",
			es: "Colmillos Malvados",
			it: "Zanne Ferali",
			pt: "Presas Trapaceiras",
			de: "Schurkische Fänge"
		},

		effect: {
			en: "This attack does 10 more damage for each Single Strike Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon Poing Final dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño más por cada Pokémon Golpe Brusco en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon Colpo Singolo nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon Golpe Decisivo na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes Fokussierter-Angriff-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "They live alone without forming packs. They will only listen to orders from Trainers who can draw out their true power."
	}
}

export default card
