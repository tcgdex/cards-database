import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Drawareness",
			fr: "Pioche Consciente",
			es: "Robo a Conciencia",
			it: "Pesca Consapevole",
			pt: "Compra Consciente",
			de: "Bewusstes Ziehen"
		},

		effect: {
			en: "You may discard any number of cards from your hand until you have 4 or fewer. Draw cards until you have 5 cards in your hand.",
			fr: "Vous pouvez défausser le nombre voulu de cartes de votre main jusqu'à en avoir 4 ou moins. Piochez des cartes jusqu'à en avoir 5 en main.",
			es: "Puedes descartar cualquier cantidad de cartas de tu mano hasta que tengas 4 o menos. Roba cartas hasta que tengas 5 cartas en tu mano.",
			it: "Puoi scartare un numero qualsiasi di carte che hai in mano finché ne hai quattro o meno. Pesca fino ad avere cinque carte in mano.",
			pt: "Você pode descartar qualquer número de cartas da sua mão até ter 4 cartas ou menos. Compre cartas até ter 5 cartas na sua mão.",
			de: "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen, bis du 4 oder weniger hast. Ziehe so lange Karten, bis du 5 Karten auf deiner Hand hast."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Enhanced Blade",
			fr: "Lame Améliorée",
			es: "Tajo Mejorado",
			it: "Superlama",
			pt: "Espada Melhorada",
			de: "Verstärkte Klinge"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 60 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card