import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Fan Rotom",
		fr: "Motisma Hélice",
		es: "Rotom Ventilador",
		pt: "Rotom Ventilador",
		it: "Rotom Vortice",
		de: "Wirbel-Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fan Call",
			fr: "Appel Hélice",
			es: "Llamada del Ventilador",
			pt: "Chamado Ventiladoresco",
			it: "Richiamovortice",
			de: "Ruf des Ventilators"
		},

		effect: {
			en: "Once during your first turn, you may search your deck for up to 3 {C} Pokémon with 100 HP or less, reveal them, and put them into your hand. Then, shuffle your deck. You can't use more than 1 Fan Call Ability during your turn.",
			fr: "Une fois pendant votre premier tour, vous pouvez chercher dans votre deck jusqu'à 3 Pokémon {C} ayant 100 PV ou moins, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent Appel Hélice pendant votre tour.",
			es: "Una vez durante tu primer turno, puedes buscar en tu baraja hasta 3 Pokémon {C} con 100 PS o menos, enseñarlos y ponerlos en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de una habilidad Llamada del Ventilador durante tu turno.",
			pt: "Uma vez durante o seu primeiro turno, você poderá procurar por até 3 Pokémon {C} com 100 PS ou menos no seu baralho, revelá-los e colocá-los na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade Chamado Ventiladoresco durante o seu turno.",
			it: "Una sola volta durante il tuo primo turno, puoi cercare nel tuo mazzo fino a tre Pokémon {C} con 100 PS o meno, mostrarli e aggiungerli alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un'abilità Richiamovortice durante il tuo turno.",
			de: "Einmal während deines ersten Zuges kannst du dein Deck nach bis zu 3 {C}-Pokémon mit 100 oder weniger KP durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst die Fähigkeit Ruf des Ventilators nur einmal während deines Zuges einsetzen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Assault Landing",
			fr: "Atterrissage d'Assaut",
			es: "Aterrizaje Asalto",
			pt: "Aterrissagem Ofensiva",
			it: "Atterrassalto",
			de: "Angriffslandung"
		},

		effect: {
			en: "If there is no Stadium in play, this attack does nothing.",
			fr: "S'il n'y a pas de Stade en jeu, cette attaque ne fait rien.",
			es: "Si no hay ningún Estadio en juego, este ataque no hace nada.",
			pt: "Se não houver Estádio em jogo, este ataque não fará nada.",
			it: "Se non c'è alcuna carta Stadio in gioco, questo attacco non ha effetto.",
			de: "Wenn keine Stadionkarte im Spiel ist, hat diese Attacke keine Auswirkungen."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Toshinao Aoki",

	thirdParty: {
		cardmarket: 805477
	}
}

export default card