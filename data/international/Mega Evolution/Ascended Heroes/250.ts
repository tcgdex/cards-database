import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fan Rotom",
		'fr-fr': "Motisma Hélice",
		'es-es': "Rotom Ventilador",
		'es-mx': "Rotom Ventilador",
		'de-de': "Wirbel-Rotom",
		'it-it': "Rotom Vortice",
		'pt-br': "Rotom Ventilador"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [479],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fan Call",
			'fr-fr': "Appel Hélice",
			'es-es': "Llamada del Ventilador",
			'es-mx': "Llamada del Ventilador",
			'de-de': "Ruf des Ventilators",
			'it-it': "Richiamovortice",
			'pt-br': "Chamado Ventiladoresco"
		},

		effect: {
			'en-us': "Once during your first turn, you may search your deck for up to 3 {C} Pokémon with 100 HP or less, reveal them, and put them into your hand. Then, shuffle your deck. You can't use more than 1 Fan Call Ability during your turn.",
			'fr-fr': "Une fois pendant votre premier tour, vous pouvez chercher dans votre deck jusqu'à 3 Pokémon {C} ayant 100 PV ou moins, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent Appel Hélice pendant votre tour.",
			'es-es': "Una vez durante tu primer turno, puedes buscar en tu baraja hasta 3 Pokémon {C} con 100 PS o menos, enseñarlos y ponerlos en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de una habilidad Llamada del Ventilador durante tu turno.",
			'es-mx': "Una vez durante tu primer turno, puedes buscar en tu mazo hasta 3 Pokémon {C} con 100 PS o menos, mostrarlos y ponerlos en tu mano. Después, baraja tu mazo. No puedes usar más de 1 Habilidad Llamada del Ventilador durante tu turno.",
			'de-de': "Einmal während deines ersten Zuges kannst du dein Deck nach bis zu 3 {C}-Pokémon mit 100 oder weniger KP durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst die Fähigkeit Ruf des Ventilators nur einmal während deines Zuges einsetzen.",
			'it-it': "Una sola volta durante il tuo primo turno, puoi cercare nel tuo mazzo fino a tre Pokémon {C} con 100 PS o meno, mostrarli e aggiungerli alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un'abilità Richiamovortice durante il tuo turno.",
			'pt-br': "Uma vez durante o seu primeiro turno, você poderá procurar por até 3 Pokémon {C} com 100 PS ou menos no seu baralho, revelá-los e colocá-los na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade Chamado Ventiladoresco durante o seu turno."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Assault Landing",
			'fr-fr': "Atterrissage d'Assaut",
			'es-es': "Aterrizaje Asalto",
			'es-mx': "Aterrizaje de Asalto",
			'de-de': "Angriffslandung",
			'it-it': "Atterrassalto",
			'pt-br': "Aterrissagem Ofensiva"
		},

		effect: {
			'en-us': "If there is no Stadium in play, this attack does nothing.",
			'fr-fr': "S'il n'y a pas de Stade en jeu, cette attaque ne fait rien.",
			'es-es': "Si no hay ningún Estadio en juego, este ataque no hace nada.",
			'es-mx': "Si no hay ningún Estadio en juego, este ataque no hace nada.",
			'de-de': "Wenn keine Stadionkarte im Spiel ist, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se non c'è alcuna carta Stadio in gioco, questo attacco non ha effetto.",
			'pt-br': "Se não houver Estádio em jogo, este ataque não fará nada."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "There are several appliances that Rotom can inspirit, but the first one to be developed was the electric fan.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869861,
				tcgplayer: 676062
			}
		}
	],
}

export default card
