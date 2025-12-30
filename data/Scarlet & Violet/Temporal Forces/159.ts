import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Rescue Board",
		fr: "Planche de Sauvetage",
		es: "Monopatín de Rescate",
		it: "Skateboard di Salvataggio",
		pt: "Skate de Resgate",
		de: "Rettungsboard"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Retreat Cost of the Pokémon this card is attached to is {C} less. If that Pokémon's remaining HP is 30 or less, it has no Retreat Cost.",
		fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de {C}. S'il reste 30 PV ou moins à ce Pokémon, il n'a pas de Coût de Retraite.",
		es: "El Coste de Retirada del Pokémon al que esté unida esta carta es de {C} menos. Si a ese Pokémon le quedan 30 PS o menos, no tiene ningún Coste de Retirada.",
		it: "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di {C}. Se i PS rimanenti di quel Pokémon sono 30 o meno, non ha costo di ritirata.",
		pt: "O custo de Recuo do Pokémon ao qual esta carta está ligada é {C} a menos. Se o PS restante daquele Pokémon for 30 ou menos, ele não terá custo de Recuo.",
		de: "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um {C}. Wenn jenes Pokémon 30 oder weniger verbleibende KP hat, hat es keine Rückzugskosten."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "player-reward"
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Toyste Beach",

	thirdParty: {
		cardmarket: 760789
	}
}

export default card