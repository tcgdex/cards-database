import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Indeedee",
		fr: "Wimessir",
		es: "Indeedee",
		it: "Indeedee",
		pt: "Indeedee",
		de: "Servol"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smart Service",
			fr: "Service Intelligent",
			es: "Servicio Inteligente",
			it: "Servizio Magistrale",
			pt: "Serviço Inteligente",
			de: "Pfiffiger Service"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Si sales primero, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Se você for primeiro, poderá usar este ataque no seu primeiro turno. Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Smack",
			fr: "Claque",
			es: "Palmetazo",
			it: "Schiaffo",
			pt: "Estalo",
			de: "Klatscher"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card