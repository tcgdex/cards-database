import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [251],

	name: {
		en: "Shining Celebi",
		fr: "Celebi brillant",
		de: "Schimmerndes Celebi",
		es: "Celebi Luminoso",
		it: "Shining Celebi",
		pt: "Celebi Luminescente",
		'es-mx': "Celebi Luminoso"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Healing Water",
			fr: "Eau de soin",
			de: "Heilendes Wasser",
			es: "Agua Sanadora",
			it: "Acqua Curativa",
			pt: "Água de Cura",
			'es-mx': "Agua Sanadora"
		},

		effect: {
			en: "Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of <span class=\"energy-symbol Water\" title=\"Water\">Water</span> Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them.",
			fr: "Retirez un nombre de marqueurs de dégâts sur un des Pokémon de votre Banc égal au nombre d'Énergies <span class=\"energy-symbol Water\" title=\"Eau\">Water</span> attachées à Celebi brillant. Si le Pokémon a moins de marqueurs de dégâts, retirez-les tous.",
			de: "Entferne so viele Schadensmarken von einem deiner Pokémon auf deiner Bank, wie <span class=\"energy-symbol Water\" title=\"Wasser\">Water</span>-Energie an Schimmerndes Celebi angelegt sind. Wenn dieses Pokémon weniger Schadensmarken hat, entferne alle.",
			es: "Quita de 1 de tus Pokémon en Banca una cantidad de contadores de daño igual al número de cartas de Energía <span class=\"energy-symbol Water\" title=\"Agua\">Water</span> unidas a Celebi Luminoso. Si el Pokémon tiene menos contadores de daño que esa cantidad, quítalos todos.",
			it: "Togli da uno dei tuoi Pokémon in Panchina un numero di segnalini danno uguale al numero di Energie <span class=\"energy-symbol Water\" title=\"Acqua\">Water</span> assegnate a Shining Celebi. Se quel Pokémon ha meno segnalini danno di quelli che gli verrebbero tolti, toglili tutti.",
			pt: "Remova de um dos seus Pokémon no Banco um número de marcadores de dano igual ao número de cartas de Energia <span class=\"energy-symbol Water\" title=\"Água\">Water</span> ligadas ao Celebi Luminescente. Se o Pokémon tiver menos marcadores de dano do que isso, remova todos eles.",
			'es-mx': "Quita de 1 de tus Pokémon en Banca una cantidad de contadores de daño igual al número de cartas de Energía <span class=\"energy-symbol Water\" title=\"Agua\">Water</span> unidas a Celebi Luminoso. Si el Pokémon tiene menos contadores de daño que esa cantidad, quítalos todos."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Miracle Leaf",
			fr: "Feuille miracle",
			de: "Wunderblatt",
			es: "Hoja Milagrosa",
			it: "Foglia Miracolosa",
			pt: "Folha Milagrosa",
			'es-mx': "Hoja Milagrosa"
		},

		effect: {
			en: "Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice).",
			fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon Défenseur. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Endormi, Confus ou Empoisonné (selon votre choix).",
			de: "Wirf so viele Münzen, wie Energiekarten an das verteidigende Pokémon angelegt sind. Wenn mindestens einmal \"Kopf\" fällt, wählst du, ob das verteidigende Pokémon jetzt verwirrt oder vergiftet ist oder schläft.",
			es: "Echa a cara o cruz una cantidad de monedas igual al número de Energías unidas al Pokémon a la defensa. Si sale al menos 1 cara, el Pokémon a la defensa pasa a estar Dormido, Confundido o Envenenado (a tu elección).",
			it: "Lancia una moneta un numero di volte uguale al numero di carte Energia assegnate al Pokémon Difensore. Se esce una o più volte testa, il Pokémon Difensore è Addormentato, Confuso o Avvelenato <em>(a tua scelta)</em>.",
			pt: "Tire \"cara ou coroa\" tantas vezes quantas forem as Energias ligadas ao Pokémon Defensor. Se der \"cara\" 1 ou mais vezes, o Pokémon Defensor fica Adormecido, Confuso ou Envenenado (à sua escolha).",
			'es-mx': "Tira a cara o cruz una cantidad de monedas igual al número de Energías unidas al Pokémon a la defensa. Si sale al menos 1 cara, el Pokémon a la defensa ahora está Dormido, Confundido o Envenenado (a tu elección)."
		},

		damage: 10,
		cost: ["Grass", "Psychic"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907944,
				tcgplayer: 716205
			}
		}
	],
}

export default card