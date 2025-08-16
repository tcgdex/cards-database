import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1014],
	set: Set,

	name: {
		en: "Okidogi",
		fr: "Félicanis",
		es: "Okidogi",
		pt: "Okidogi",
		it: "Okidogi",
		de: "Boninu"
	},

	rarity: "Rare",
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
			pt: "Adrena-poder",
			it: "Adrena-Potenza",
			de: "Adrena-Power"
		},

		effect: {
			en: "If this Pokémon has any {D} Energy attached, it gets +100 HP, and the attacks it uses do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si ce Pokémon a au moins une Énergie {D} attachée, il reçoit +100 PV et les attaques utilisées par ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Si este Pokémon tiene alguna Energía {D} unida, obtiene 100 PS más, y los ataques que use hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Se este Pokémon tiver alguma Energia {D} ligada a ele, ele receberá 100 PS a mais, e os ataques que ele usar causarão 100 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			it: "Se questo Pokémon ha delle Energie {D} assegnate, ha 100 PS in più e gli attacchi che usa infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			de: "Wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist, erhält es +100 KP und die Attacken, die es einsetzt, fügen dem Aktiven Pokémon deines Gegners 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Good Punch",
			fr: "Bon Poing",
			es: "Puño Bueno",
			pt: "Baita Soco",
			it: "Bel Pugno",
			de: "Schöner Schlag"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Souichirou Gunjima"
}

export default card