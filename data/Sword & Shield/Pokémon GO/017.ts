import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise",
		fr: "Tortank",
		es: "Blastoise",
		it: "Blastoise",
		pt: "Blastoise",
		de: "Turtok"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
		es: "Wartortle",
		it: "Wartortle",
		pt: "Wartortle",
		de: "Schillok"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vitality Spring",
			fr: "Source de Vitalité",
			es: "Manantial de Vitalidad",
			it: "Sorgente Vitale",
			pt: "Nascente da Vitalidade",
			de: "Vitalitätsquelle"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 6 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 6 cartes Énergie, puis les attacher à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 6 cartas de Energía y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a sei carte Energia e assegnarle ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 6 cartas de Energia no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 6 Energiekarten durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			pt: "Jato d'Água",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card