import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Shine On",
			fr: "Brillance",
			es: "Brilla que te Brilla",
			it: "Fotòforo",
			pt: "Iluminar"
		},

		effect: {
			en: "Look at the top card of your deck. You may put that card on the bottom of your deck.",
			fr: "Regardez la carte du dessus de votre deck. Vous pouvez placer cette carte en dessous de votre deck.",
			es: "Mira la primera carta de tu baraja. Puedes poner esa carta en la parte inferior de tu baraja.",
			it: "Guarda la prima carta del tuo mazzo. Puoi mettere quella carta in fondo al tuo mazzo.",
			pt: "Olhe a carta de cima do seu baralho. Você pode colocar aquela carta como a carta de baixo do seu baralho."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			es: "Carga Diminuta",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card