import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [9],
	set: Set,

	name: {
		'en-us': "Blastoise",
		'fr-fr': "Tortank",
		'es-es': "Blastoise",
		'it-it': "Blastoise",
		'pt-br': "Blastoise",
		'de-de': "Turtok"
	},

	illustrator: "NC Empire",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'es-es': "Wartortle",
		'it-it': "Wartortle",
		'pt-br': "Wartortle",
		'de-de': "Schillok"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Vitality Spring",
			'fr-fr': "Source de Vitalité",
			'es-es': "Manantial de Vitalidad",
			'it-it': "Sorgente Vitale",
			'pt-br': "Nascente da Vitalidade",
			'de-de': "Vitalitätsquelle"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for up to 6 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 6 cartes Énergie, puis les attacher à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 6 cartas de Energía y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a sei carte Energia e assegnarle ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por até 6 cartas de Energia no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 6 Energiekarten durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água",
			'de-de': "Hydropumpe"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665250,
				tcgplayer: 274453
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665250,
				tcgplayer: 274453
			}
		},
	],
}

export default card
