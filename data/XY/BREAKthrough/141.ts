import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Heavy Boots",
		fr: "Bottes Lourdes",
		es: "Botas Pesadas",
		it: "Scarponi Pesanti",
		pt: "Botas Pesadas",
		de: "Schwere Stiefel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Si le Coût de Retraite du Pokémon auquel cette carte est attachée est de 3 ou plus, ajoutez 20 PV au Pokémon et ce dernier ne peut pas être Confus. (Si le Pokémon est déjà Confus, retirez cet État Spécial.)",
		en: "If the Retreat Cost of the Pokémon this card is attached to is 3 or more, that Pokémon gets +20 HP and can't be Confused. (If that Pokémon is currently Confused, remove that Special Condition.)",
		es: "Si el Coste de Retirada del Pokémon al que está unida esta carta es de 3 o más, ese Pokémon obtiene 20 PS más y no puede pasar a estar Confundido. (Si ese Pokémon está ahora Confundido, elimina esa Condición Especial).",
		it: "Se il costo di ritirata del Pokémon a cui è assegnata questa carta è di almeno tre, quel Pokémon ha 20 PS in più e non può venire confuso (se quel Pokémon è attualmente confuso, rimuovine la condizione speciale).",
		pt: "Se o Custo para Recuar do Pokémon ao qual este card está ligado for de 3 ou mais, este Pokémon recebe +20 PS e não pode ficar Confuso. (Se este Pokémon estiver atualmente Confuso, remova esta Condição Especial.)",
		de: "Wenn die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, 3 oder mehr betragen, erhält dieses Pokémon 20 zusätzliche KP. Außerdem kann es nicht verwirrt werden. (Wenn dieses Pokémon zurzeit verwirrt ist, entferne diesen Speziellen Zustand.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 286387,
		tcgplayer: 107260
	}
}

export default card
