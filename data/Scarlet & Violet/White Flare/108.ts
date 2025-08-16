import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		en: "Basculin",
		fr: "Bargantua",
		de: "Barschuft",
		it: "Basculin",
		pt: "Basculin",
		es: "Basculin",
		'es-mx': "Basculin"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			pt: "Mordida",
			es: "Mordisco",
			'es-mx': "Mordida"
		},

		damage: 10
	}, {
		cost: ["Water"],

		name: {
			en: "Bared Fangs",
			fr: "Crocs à Vif",
			de: "Gebleckte Fänge",
			it: "Zannenude",
			pt: "Presas Brutas",
			es: "Colmillos Descubiertos",
			'es-mx': "Colmillos Expuestos"
		},

		effect: {
			en: "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n'a aucun marqueur de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen.",
			it: "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
			pt: "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
			es: "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
			'es-mx': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card