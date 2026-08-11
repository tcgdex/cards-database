import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		'en-us': "Basculin",
		'fr-fr': "Bargantua",
		'de-de': "Barschuft",
		'it-it': "Basculin",
		'pt-br': "Basculin",
		'es-es': "Basculin",
		'es-mx': "Basculin"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'es-es': "Mordisco",
			'es-mx': "Mordida"
		},

		damage: 10
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Bared Fangs",
			'fr-fr': "Crocs à Vif",
			'de-de': "Gebleckte Fänge",
			'it-it': "Zannenude",
			'pt-br': "Presas Brutas",
			'es-es': "Colmillos Descubiertos",
			'es-mx': "Colmillos Expuestos"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'a aucun marqueur de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
			'es-es': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
			'es-mx': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 835951,
			tcgplayer: 642136
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 835951,
			tcgplayer: 642136
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 836535,
			tcgplayer: 642380
		}
	},
	{
		type: "reverse",
		foil: "masterball",
		thirdParty: {
			cardmarket: 836536,
			tcgplayer: 642308
		}
	},
],
}

export default card
