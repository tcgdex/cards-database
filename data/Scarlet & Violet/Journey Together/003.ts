import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree",
		fr: "Papilusion",
		es: "Butterfree",
		de: "Smettbo",
		it: "Butterfree",
		pt: "Butterfree",
		'es-mx': "Butterfree"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Scale Hurricane",
			fr: "Ouragan Écaille",
			es: "Huracán Escama",
			de: "Flügelstaubsturm",
			it: "Tifone di Scaglie",
			pt: "Furacão de Escamas",
			'es-mx': "Huracán de Escamas"
		},

		effect: {
			en: "Flip 4 coins. This attack does 60 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu. Zeigen mindestens 2 Münzen Kopf, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa. Se esce almeno due volte testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 4 moedas. Este ataque causa 60 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara. Si salen al menos 2 caras, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: "60×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
