import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Encouraging Gift",
			fr: "Cadeau Vivifiant",
			es: "Regalo Prometedor",
			it: "Dono Incoraggiante",
			pt: "Presente Encorajador",
			de: "Aufheiterndes Geschenk"
		},

		effect: {
			en: "You can use this attack only if you go second, and only during your first turn. Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Cherchez dans votre deck jusqu'à 3 cartes et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Puedes usar este ataque solo si sales segundo, y solo durante tu primer turno. Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você só pode usar este ataque se for o segundo a jogar e somente no seu primeiro turno. Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			pt: "Baque",
			de: "Plumps"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card