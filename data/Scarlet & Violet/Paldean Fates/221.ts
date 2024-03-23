import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot ex",
		fr: "Roucarnage-ex",
		es: "Pidgeot ex",
		it: "Pidgeot-ex",
		pt: "Pidgeot ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Search",
			fr: "Recherche Rapide",
			es: "Búsqueda Rápida",
			it: "Ricerca Rapida",
			pt: "Busca Rápida"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a card and put it into your hand. Then, shuffle your deck. You can't use more than 1 Quick Search Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent Recherche Rapide par tour.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de una habilidad Búsqueda Rápida en cada turno.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Puoi usare l'abilità Ricerca Rapida solo una volta per turno.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade Busca Rápida por turno."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Blustery Wind",
			fr: "Vent en Rafales",
			es: "Ventarrón",
			it: "Vento Impetuoso",
			pt: "Ventania Agitada"
		},

		effect: {
			en: "You may discard a Stadium in play.",
			fr: "Vous pouvez défausser un Stade en jeu.",
			es: "Puedes descartar 1 Estadio en juego.",
			it: "Puoi scartare una carta Stadio in gioco.",
			pt: "Você pode descartar um Estádio em jogo."
		},

		damage: 120
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card