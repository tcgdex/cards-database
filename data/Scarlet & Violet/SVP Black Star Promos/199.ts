import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		de: "Zarude",
		it: "Zarude",
		es: "Zarude",
		pt: "Zarude"
	},

	illustrator: "Uninori",
	rarity: "None",
	category: "Pokemon",
	dexId: [893],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Pluck Off",
			fr: "Retrait",
			de: "Abrupfen",
			it: "Cogliere",
			es: "Sacar",
			pt: "Extirpar"
	},

		effect: {
			en: "Search your deck for up to 3 Basic {G} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie {G} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-{G}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base {G}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja hasta 3 cartas de Energía {G} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 cartas de Energia {G} Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Hammer Whip",
			fr: "Fouet Marteau",
			de: "Hammerpeitsche",
			it: "Martelfrustata",
			es: "Látigo Martillo",
			pt: "Chicote de Martelo"
	},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
	},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card