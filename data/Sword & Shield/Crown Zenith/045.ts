import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Rotom V",
		fr: "Motisma V",
		es: "Rotom V",
		it: "Rotom V",
		pt: "Rotom V",
		de: "Rotom V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Instant Charge",
			fr: "Charge Instantanée",
			es: "Carga Instantánea",
			it: "Carica Istantanea",
			pt: "Carga Instantânea",
			de: "Sofortladung"
		},

		effect: {
			en: "Once during your turn, you may draw 3 cards. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez piocher 3 cartes. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes robar 3 cartas. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi pescare tre carte. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, você poderá comprar 3 cartas. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du 3 Karten ziehen. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Scrap Short",
			fr: "Court-Circuit Rebut",
			es: "Cortocircuito Chatarra",
			it: "Cortoscarto",
			pt: "Curto-circuito de Sucata",
			de: "Schrottkurzschluss"
		},

		effect: {
			en: "Put any number of Pokémon Tool cards from your discard pile in the Lost Zone. This attack does 40 more damage for each card you put in the Lost Zone in this way.",
			fr: "Placez le nombre voulu de cartes Outil Pokémon de votre pile de défausse dans la Zone Perdue. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte placée dans la Zone Perdue de cette façon.",
			es: "Pon cualquier cantidad de cartas de Herramienta Pokémon de tu pila de descartes en la Zona Perdida. Este ataque hace 40 puntos de daño más por cada carta que hayas puesto en la Zona Perdida de esta manera.",
			it: "Prendi un numero qualsiasi di carte Oggetto Pokémon dalla tua pila degli scarti e mettile nell'area perduta. Questo attacco infligge 40 danni in più per ogni carta che hai messo nell'area perduta in questo modo.",
			pt: "Coloque qualquer número de cartas de Ferramenta Pokémon da sua pilha de descarte na Zona Perdida. Este ataque causa 40 pontos de dano a mais para cada carta que você colocou na Zona Perdida desta forma.",
			de: "Lege beliebig viele Pokémon-Ausrüstungen aus deinem Ablagestapel ins Nirgendwo. Diese Attacke fügt für jede auf diese Weise ins Nirgendwo gelegte Karte 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691762,
		tcgplayer: 478150
	}
}

export default card
