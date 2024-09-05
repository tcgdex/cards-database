import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Okidogi",
		fr: "Félicanis",
		es: "Okidogi",
		it: "Okidogi",
		pt: "Okidogi",
		de: "Boninu"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Adrena-Power",
			fr: "Adréna-Puissance",
			es: "Adrenalina Poderosa",
			it: "Adrena-Potenza",
			pt: "Adrena-poder",
			de: "Adrena-Power"
		},

		effect: {
			en: "If this Pokémon has any Darkness Energy attached, it gets +100 HP, and the attacks it uses do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si ce Pokémon a au moins une Énergie Darkness attachée, il reçoit +100 PV et les attaques utilisées par ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Si este Pokémon tiene alguna Energía Darkness unida, obtiene 100 PS más, y los ataques que use hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Se questo Pokémon ha delle Energie Darkness assegnate, ha 100 PS in più e gli attacchi che usa infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Se este Pokémon tiver alguma Energia Darkness ligada a ele, ele receberá 100 PS a mais, e os ataques que ele usar causarão 100 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, erhält es +100 KP und die Attacken, die es einsetzt, fügen dem Aktiven Pokémon deines Gegners 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Good Punch",
			fr: "Bon Poing",
			es: "Puño Bueno",
			it: "Bel Pugno",
			pt: "Baita Soco",
			de: "Schöner Schlag"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card