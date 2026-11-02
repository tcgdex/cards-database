import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [301],

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enekoro",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty",
		'es-mx': "Delcatty"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Max Energy Source",
			fr: "Source d'énergie maximale",
			de: "Maximale Energie",
			es: "Máxima fuente energética",
			it: "Superfonte di Energia",
			pt: "Fonte Máxima de Energia",
			'es-mx': "Máxima fuente energética"
		},

		effect: {
			en: "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
			fr: "Inflige 10 dégâts pour chaque Énergie attachée à vos Pokémon Actifs.",
			de: "Dieser Angriff fügt für jede Energie, die an allen deinen Aktiven Pokémon angelegt ist, 10 Schadenspunkte zu.",
			es: "Hace 10 puntos de daño por cada carta de Energía unida a tu Pokémon activo.",
			it: "Infligge 10 danni per il numero di carte Energia assegnate a tutti i tuoi Pokémon Attivi.",
			pt: "Este ataque causa 10 de dano vezes a quantidade total de Energias ligadas a todos os seus Pokémon Ativos.",
			'es-mx': "Hace 10 puntos de daño por cada carta de Energía unida a tu Pokémon activo."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907946,
				tcgplayer: 716156
			}
		}
	],
}

export default card
