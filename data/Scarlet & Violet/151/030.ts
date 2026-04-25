import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [30],
	set: Set,

	name: {
		fr: "Nidorina",
		en: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		de: "Nidorina"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		fr: "Nidoran♀",
		en: "Nidoran♀",
		es: "Nidoran♀",
		it: "Nidoran♀",
		pt: "Nidoran♀",
		de: "Nidoran♀"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Rassemblement Familial",
			en: "Fetch Family",
			es: "Buscar a la Familia",
			it: "Radunafamiglia",
			pt: "Buscar a Família",
			de: "Familientreffen"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Croc Aiguisé",
			en: "Sharp Fang",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Teeziro",

	thirdParty: {
		cardmarket: 733625
	}
}

export default card