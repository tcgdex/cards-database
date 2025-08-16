import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		fr: "Palkia Originel V",
		de: "Ur-Palkia V",
		es: "Palkia Origen V",
		pt: "Palkia Forma Origem V",
		it: "Palkia Originale V",
		en: "Origin Forme Palkia V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Autorité Régionale",
			de: "Herrscher der Region",
			es: "Dominio de la Región",
			pt: "Dominar a Região",
			it: "Governa la Regione",
			en: "Rule the Region"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Hydro-Brèche",
			de: "Hydrobrecher",
			es: "Hidrodescanso",
			pt: "Pausa Aquática",
			it: "Idropausa",
			en: "Hydro Break"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card